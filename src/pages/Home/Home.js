import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Log, validBoardId, validBoardUrl, extractBoardId,
} from '#utils';
import { boardsErrors } from '#constants';
import { HeadMeta } from '#components';
import routes from '#routes';
import { boardsService, realtimeService } from '#services';
import { setCreated } from '#store';

import { HomeStep, CreateStep, JoinStep } from './subcomponents';
import SWrapper from './styled';

const steps = Object.freeze({
  home   : 0,
  create : 1,
  join   : 2,
});

const Home = () => {
  const { push : redirectTo } = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = useState(steps.home);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState();

  const create = useCallback(
    (boardName, userName) => {
      Log.debug('Component : Home : create', { boardName, userName });

      setIsLoading(true);
      setErrorCode();

      realtimeService.start();
      boardsService.create(boardName, userName)
        .then(({ boardId, boardName : joinedBoardName }) => {
          Log.debug('Component : Home : create : created', { boardId, joinedBoardName });

          dispatch(setCreated({ boardName, userName }));
          redirectTo(routes.board.replace(':id', boardId));
        })
        .catch(({ code }) => {
          setErrorCode(code || boardsErrors.generic);
          realtimeService.stop();
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch, redirectTo],
  );

  const join = useCallback(
    (boardId, userName) => {
      Log.debug('Component : Home : join', { boardId, userName });

      switch (true) {
        case validBoardId(boardId):
          redirectTo(routes.board.replace(':id', boardId), { userName });
          break;

        case validBoardUrl(boardId):
          redirectTo(routes.board.replace(':id', extractBoardId(boardId)), { userName });
          break;

        default:
          setErrorCode(boardsErrors.invalidId);
          break;
      }
    },
    [redirectTo],
  );

  // Clean errors when switching step
  useEffect(
    () => setErrorCode(),
    [step],
  );

  return (
    <>
      <HeadMeta route={routes.home} />
      <SWrapper>
        <HomeStep
          show={step === steps.home}
          onCreate={() => setStep(steps.create)}
          onJoin={() => setStep(steps.join)}
        />
        <CreateStep
          show={step === steps.create}
          isLoading={isLoading}
          errorCode={errorCode}
          onCreate={create}
          onCancel={() => setStep(steps.home)}
        />
        <JoinStep
          show={step === steps.join}
          errorCode={errorCode}
          onJoin={join}
          onCancel={() => setStep(steps.home)}
        />
      </SWrapper>
    </>
  );
};

export default Home;
