import React from 'react';

import BoardMeta from '../BoardMeta';
import ToolButton from '../ToolButton';

import { SWrapper, SMeta, STools } from './styled';

const ToolBar = () => (
  <SWrapper>
    <SMeta>
      <BoardMeta />
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
