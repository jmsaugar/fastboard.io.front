import React from 'react';

import ToolButton from '../ToolButton';

import { SWrapper, SMeta, STools } from './styled';

const ToolBar = () => (
  <SWrapper>
    <SMeta>
      jms @ Board 3
    </SMeta>
    <STools>
      <ToolButton />
      <ToolButton />
      <ToolButton />
      <ToolButton />
      <ToolButton />
      <ToolButton />
    </STools>
  </SWrapper>
);

export default ToolBar;
