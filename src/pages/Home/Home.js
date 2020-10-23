import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { boardsService } from '../../services';

import {
  SWrapper, SContent, STitle, STagLine, SButton,
} from './styled';

const Home = () => {
  const { push : redirectTo } = useHistory();

  const createBoard = useCallback(
    () => {
      boardsService.init();
      boardsService.join({
        boardName : '#BoardName#',
        userName  : '#userName#',
      })
        .then((boardId) => redirectTo(`/boards/${boardId}`))
        .catch(() => console.error('!!!.error creating board'));
    },
    [redirectTo],
  );

  return (
    <SWrapper>
      <SContent>
        <STitle>
          Draw & share
        </STitle>
        <STagLine>
          Draw real-time with anyone on the other side and improve your productivity now.
          Just one click away.
        </STagLine>
        <div>
          <SButton onClick={createBoard}>
            Create
          </SButton>
          <SButton>
            Join
          </SButton>
        </div>
      </SContent>
    </SWrapper>
  )
};

export default Home;
