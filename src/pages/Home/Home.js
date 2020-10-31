import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Log } from '../../utils';
import { boardsService } from '../../services';

import { HomeStep, CreateStep, JoinStep } from './subcomponents';
import SWrapper from './styled';

const steps = Object.freeze({
  home   : 0,
  create : 1,
  join   : 2,
});

const Home = () => {
  const { push : redirectTo } = useHistory();
  const [step, setStep] = useState(steps.home);

  const join = useCallback(
    ({ boardId, boardName, userName }) => {
      Log.debug('Component : Home : join', { boardId, boardName, userName });
      boardsService.init();
      boardsService.join({ boardId, boardName, userName })
        .then((joinedBoardId) => redirectTo(`/boards/${joinedBoardId}`)) // @todo urls to constants
        .catch(() => Log.error('Component : Home : join : error creating board'));
    },
    [redirectTo],
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
