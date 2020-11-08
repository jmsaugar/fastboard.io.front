import React, { useCallback, useState } from 'react';
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

import { drawingsColors, tools } from '#constants';
import { drawingsService } from '#services';
import { isJoinedSelector } from '#store';

import BoardMeta from '../BoardMeta';
import ToolButton from '../ToolButton';
import ToolOptions from '../ToolOptions';

import { SWrapper, SMeta, STools } from './styled';

const toolsWithOptions = [tools.pencil, tools.pen, tools.highlighter];

const ToolBar = () => {
  const isJoined = useSelector(isJoinedSelector);
  const [selectedTool, setSelectedTool] = useState();
  const [showOptionsTool, setShowOptionsTool] = useState();
  const [pencilColor, setPencilColor] = useState(drawingsColors.black);
  const [penColor, setPenColor] = useState(drawingsColors.red);
  const [highlighterColor, setHighlighterColor] = useState(drawingsColors.black);

  const clickTool = useCallback(
    (tool) => {
      if (selectedTool === tool) {
        if (toolsWithOptions.includes(tool)) {
          // Show options
          setShowOptionsTool(tool);
        }
      } else {
        // drawingsService.tools[tool].activate(); // @todo check the tool exists
        setSelectedTool(tool);
      }
    },
    [selectedTool, setSelectedTool],
  );

  return (
    <SWrapper>
      {isJoined && (
        <SMeta>
          <BoardMeta />
        </SMeta>
      )}
      <STools>
        <ToolButton
          icon={<PencilIcon />}
          color={penColor}
          onClick={() => clickTool(tools.pencil)}
          selected={selectedTool === tools.pencil}
        >
          <ToolOptions show={showOptionsTool === tools.pencil} />
        </ToolButton>
        <ToolButton
          icon={<PenIcon />}
          onClick={() => clickTool(tools.pen)}
          selected={selectedTool === tools.pen}
        >
          <ToolOptions show={showOptionsTool === tools.pen} />
        </ToolButton>
        <ToolButton
          icon={<HighlighterIcon />}
          onClick={() => clickTool(tools.highlighter)}
          selected={selectedTool === tools.highlighter}
        >
          <ToolOptions show={showOptionsTool === tools.highlighter} />
        </ToolButton>
      </STools>
    </SWrapper>
  );
};

export default ToolBar;

/*
{/* <ToolButton icon={<EraserIcon />} onClick={drawingsService.tools.eraser.activate} />
        <ToolButton icon={<PointerIcon />} />
        {/* @todo figures tool */

        /* <ToolButton icon={<ImageIcon />} />
        <ToolButton icon={<TextIcon />} />
        <ToolButton icon={<NoteIcon />} />
        <ToolButton icon={<SelectionIcon />} />
        <ToolButton icon={<DownloadIcon />} />
        <ToolButton icon={<ShareIcon />} />
        <ToolOptions show={showPenTools} />
        {/* <PenOptions show={showPenTools}>
            <ToolOption onClick={setPenColor} />
          </PenOptions>
*/
