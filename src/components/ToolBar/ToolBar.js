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

import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

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
  const [penColor, setPenColor] = useState(drawingsColors.black);
  const [highlighterColor, setHighlighterColor] = useState(drawingsColors.black);

  const clickTool = useCallback(
    (tool) => {
      setShowOptionsTool();

      if (selectedTool === tool) {
        if (toolsWithOptions.includes(tool)) {
          // Show options
          setShowOptionsTool(tool);
        }
      } else {
        drawingsService.tools[tool].activate();
        setSelectedTool(tool);
      }
    },
    [selectedTool, setSelectedTool],
  );

  const clickToolOption = useCallback(
    (tool, color) => {
      switch (tool) {
        case tools.pencil:
          setPencilColor(color);
          break;

        case tools.pen:
          setPenColor(color);
          break;

        case tools.highlighter:
          setHighlighterColor(color);
          break;

        default:
          break;
      }

      setShowOptionsTool();
    },
    [setPencilColor, setPenColor, setHighlighterColor, setShowOptionsTool],
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
          color={pencilColor}
          onClick={() => clickTool(tools.pencil)}
          selected={selectedTool === tools.pencil}
        >
          <ToolOptions show={showOptionsTool === tools.pencil}>
            {Object.values(drawingsColors).map((color) => (
              <ToolButton
                icon={<CircleIcon />}
                color={color}
                onClick={(e) => {
                  e.stopPropagation();
                  clickToolOption(tools.pencil, color);
                }}
              />
            ))}
          </ToolOptions>
        </ToolButton>
        <ToolButton
          icon={<PenIcon />}
          color={penColor}
          onClick={() => clickTool(tools.pen)}
          selected={selectedTool === tools.pen}
        >
          <ToolOptions show={showOptionsTool === tools.pen}>
            {Object.values(drawingsColors).map((color) => (
              <ToolButton
                icon={<CircleIcon />}
                color={color}
                onClick={(e) => {
                  e.stopPropagation();
                  clickToolOption(tools.pen, color);
                }}
              />
            ))}
          </ToolOptions>
        </ToolButton>
        <ToolButton
          icon={<HighlighterIcon />}
          color={highlighterColor}
          onClick={() => clickTool(tools.highlighter)}
          selected={selectedTool === tools.highlighter}
        >
          <ToolOptions show={showOptionsTool === tools.highlighter}>
            {Object.values(drawingsColors).map((color) => (
              <ToolButton
                icon={<CircleIcon />}
                color={color}
                onClick={(e) => {
                  e.stopPropagation();
                  clickToolOption(tools.highlighter, color);
                }}
              />
            ))}
          </ToolOptions>
        </ToolButton>
        <ToolButton
          icon={<EraserIcon />}
          onClick={() => clickTool(tools.eraser)}
          selected={selectedTool === tools.eraser}
        />
      </STools>
    </SWrapper>
  );
};

export default ToolBar;
