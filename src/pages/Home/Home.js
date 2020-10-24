import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    (userName, boardName) => {
      boardsService.init();
      boardsService.join({ userName, boardName })
        .then((boardId) => redirectTo(`/boards/${boardId}`)) // @todo urls to constants
        .catch(() => console.error('!!!.error creating board'));
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
