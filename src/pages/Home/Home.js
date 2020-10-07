import React from 'react';

import { SWrapper, STitle, STagLine, SButton } from './styled';

const Home = () => (
  <SWrapper>
    <STitle>
      Draw & share
    </STitle>
    <STagLine>
      Draw real-time with anyone on the other side and improve your productivity now.
      Just one click away.
    </STagLine>
    <div>
      <SButton>
        Create
      </SButton>
      <SButton>
        Join
      </SButton>
    </div>
  </SWrapper>
);

export default Home;
