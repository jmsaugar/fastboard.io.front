import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { boardsService } from '../../services';

import { HomeStep, JoinStep } from './subcomponents';
import SWrapper from './styled';

const Home = () => {
  const { push : redirectTo } = useHistory();
  const [showHome, setShowHome] = useState(true);

  const join = useCallback(
    (boardId) => {
      boardsService.init();
      boardsService.join({ boardId })
        .then((joinedBoardId) => redirectTo(`/boards/${joinedBoardId}`)) // @todo urls to constants
        .catch(() => console.error('!!!.error creating board'));
    },
    [redirectTo],
  );

  return (
    <SWrapper>
      <HomeStep
        show={showHome}
        onCreate={join}
        onJoin={() => setShowHome(false)}
      />
      <JoinStep
        show={!showHome}
        onJoin={join}
        onCancel={() => setShowHome(true)}
      />
    </SWrapper>
  );
};

export default Home;
