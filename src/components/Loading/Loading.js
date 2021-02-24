import React from 'react';

import Spinner from '../Spinner';

import SWrapper from './styled';

const Loading = () => (
  <SWrapper>
    <Spinner size="lg" dark />
  </SWrapper>
);

export default Loading;
