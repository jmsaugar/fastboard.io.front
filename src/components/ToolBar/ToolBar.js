import React from 'react';
import { useSelector } from 'react-redux';

import { tools } from '#constants';
import { isJoinedSelector } from '#store';

import BoardMeta from '../BoardMeta';
import ToolBarItem from '../ToolBarItem';

import { SWrapper, SMeta, STools } from './styled';

const ToolBar = () => {
  const isJoined = useSelector(isJoinedSelector);

  return (
    <SWrapper>
      {isJoined && (
        <SMeta>
          <BoardMeta />
        </SMeta>
      )}
      <STools>
        <ToolBarItem tool={tools.pencil} />
        <ToolBarItem tool={tools.pen} />
        <ToolBarItem tool={tools.highlighter} />
        <ToolBarItem tool={tools.eraser} />
        <ToolBarItem tool={tools.selector} />
        <ToolBarItem tool={tools.pointer} />
        <ToolBarItem tool={tools.text} />
        <ToolBarItem tool={tools.image} />
        <ToolBarItem tool={tools.export} />
        <ToolBarItem tool={tools.clear} />
      </STools>
    </SWrapper>
  );
};

export default ToolBar;
