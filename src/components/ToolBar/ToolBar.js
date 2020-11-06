import React from 'react';
import { useSelector } from 'react-redux';
import { Pen as PencilIcon } from '@styled-icons/fa-solid/Pen';
import { Marker as PenIcon } from '@styled-icons/fa-solid/Marker';
import { Highlighter as HighlighterIcon } from '@styled-icons/fa-solid/Highlighter';
import { Eraser as EraserIcon } from '@styled-icons/fa-solid/Eraser';
import { HandPointer as PointerIcon } from '@styled-icons/fa-solid/HandPointer';
import { Image as ImageIcon } from '@styled-icons/fa-solid/Image';
import { Font as TextIcon } from '@styled-icons/fa-solid/Font';
import { StickyNote as NoteIcon } from '@styled-icons/fa-solid/StickyNote';
import { MousePointer as SelectionIcon } from '@styled-icons/fa-solid/MousePointer';
import { FileDownload as DownloadIcon } from '@styled-icons/fa-solid/FileDownload';
import { ShareAlt as ShareIcon } from '@styled-icons/fa-solid/ShareAlt';

import { drawingsService } from '#services';
import { isJoinedSelector } from '#store';

import BoardMeta from '../BoardMeta';
import ToolButton from '../ToolButton';

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
        <ToolButton title="Soy un tooltip" icon={<PencilIcon />} onClick={drawingsService.tools.pencil.activate} />
        <ToolButton icon={<PenIcon />} />
        <ToolButton icon={<HighlighterIcon />} />
        <ToolButton icon={<EraserIcon />} onClick={drawingsService.tools.eraser.activate} />
        <ToolButton icon={<PointerIcon />} />
        {/* @todo figures tool */}
        <ToolButton icon={<ImageIcon />} />
        <ToolButton icon={<TextIcon />} />
        <ToolButton icon={<NoteIcon />} />
        <ToolButton icon={<SelectionIcon />} />
        <ToolButton icon={<DownloadIcon />} />
        <ToolButton icon={<ShareIcon />} />
      </STools>
    </SWrapper>
  );
};

export default ToolBar;
