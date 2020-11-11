import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Log } from '#utils';
import routes from '#routes';
import { boardsService, realtimeService } from '#services';
import {
  setJoined, setBoardName, setMyUserName, setUsers,
} from '#store';

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

  // @todo refactor create & join functions

  const create = useCallback(
    (boardName, userName) => {
      Log.debug('Component : Home : create', { boardName, userName });

      realtimeService.start();
      boardsService.create(boardName, userName)
        .then(({ boardId, boardName : joinedBoardName }) => {
          Log.debug('Component : Home : create : created', { boardId, joinedBoardName });

          dispatch(setJoined(true));
          dispatch(setBoardName(boardName));
          dispatch(setMyUserName(userName));

          redirectTo(routes.board.replace(':id', boardId));
        })
        .catch(() => Log.error('Component : Home : create : error creating board')); // @todo stop services
    },
    [dispatch, redirectTo],
  );

  const join = useCallback(
    (boardId, userName) => {
      Log.debug('Component : Home : join', { boardId, userName });

      realtimeService.start();
      boardsService.join(boardId, userName)
        .then(({ boardId : joinedBoardId, boardName, users }) => {
          Log.debug('Component : Home : join : joined', { joinedBoardId, boardName, users });

          dispatch(setJoined(true));
          dispatch(setBoardName(boardName));
          dispatch(setMyUserName(userName));
          dispatch(setUsers(users));

          redirectTo(routes.board.replace(':id', boardId));
        })
        .catch(() => Log.error('Component : Home : join : error joining board')); // @todo stop services
    },
    [dispatch, redirectTo],
  );

  return (
    <SWrapper>
      <HomeStep
        show={step === steps.home}
        onCreate={() => setStep(steps.create)}
        onJoin={() => setStep(steps.join)}
      />
      <CreateStep
        show={step === steps.create}
        onCreate={create}
        onCancel={() => setStep(steps.home)}
      />
      <JoinStep
        show={step === steps.join}
        onJoin={join}
        onCancel={() => setStep(steps.home)}
      />
    </SWrapper>
  );
};

export default Home;
