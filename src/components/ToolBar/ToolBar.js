import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { tools } from '#constants';
import { isJoinedSelector } from '#store';

import BoardMeta from '../BoardMeta';
import ToolBarItem from '../ToolBarItem';

import { SWrapper, SMeta, STools } from './styled';

const toolbarTestId = 'toolbar-component';
const metaTestId = 'toolbar-meta-component';

const ToolBar = ({ boardId }) => {
  const isJoined = useSelector(isJoinedSelector);

  return (
    <SWrapper data-testid={toolbarTestId}>
      {isJoined && (
        <SMeta data-testid={metaTestId}>
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
        <ToolBarItem tool={tools.image} boardId={boardId} />
        <ToolBarItem tool={tools.export} />
        <ToolBarItem tool={tools.clear} />
      </STools>
    </SWrapper>
  );
};

ToolBar.propTypes = {
  boardId : PropTypes.string.isRequired,
};

export default ToolBar;
