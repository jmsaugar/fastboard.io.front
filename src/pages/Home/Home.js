import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Log } from '#utils';
import { boardsService } from '#services';
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

  const join = useCallback(
    (joinParameters) => {
      Log.debug('Component : Home : join', joinParameters);

      boardsService.init();
      boardsService.join(joinParameters)
        .then(({ boardId, boardName, users }) => {
          Log.debug('Component : Home : join : joined', { boardId });

          dispatch(setJoined(true));
          dispatch(setBoardName(boardName));
          dispatch(setMyUserName(joinParameters.userName));
          dispatch(setUsers(users));

          redirectTo(`/board/${boardId}`); // @todo urls to constants
        })
        .catch(() => Log.error('Component : Home : join : error creating board'));
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
        onCreate={join}
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
