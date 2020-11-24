import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pen as PencilIcon } from '@styled-icons/fa-solid/Pen';
import { Marker as PenIcon } from '@styled-icons/fa-solid/Marker';
import { Highlighter as HighlighterIcon } from '@styled-icons/fa-solid/Highlighter';
import { Eraser as EraserIcon } from '@styled-icons/fa-solid/Eraser';
import { HandPointer as PointerIcon } from '@styled-icons/fa-solid/HandPointer';
import { Image as ImageIcon } from '@styled-icons/fa-solid/Image';
import { Font as TextIcon } from '@styled-icons/fa-solid/Font';
import { MousePointer as SelectionIcon } from '@styled-icons/fa-solid/MousePointer';
import { FileDownload as DownloadIcon } from '@styled-icons/fa-solid/FileDownload';
// import { FileUpload as UploadIcon } from '@styled-icons/fa-solid/FileUpload';
// import { ShareAlt as ShareIcon } from '@styled-icons/fa-solid/ShareAlt';
import { Trash as ResetIcon } from '@styled-icons/fa-solid/Trash';
import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

import { drawingsColors, tools } from '#constants';
import { drawingsService } from '#services';
import { boardNameSelector, isJoinedSelector } from '#store';
import { triggerDownload } from '#utils';

import BoardMeta from '../BoardMeta';
import ToolButton from '../ToolButton';
import ToolOptions from '../ToolOptions';

import { SWrapper, SMeta, STools } from './styled';
import triggerUpload from '../../utils/triggerUpload';

const toolsWithOptions = [tools.pencil, tools.pen, tools.highlighter, tools.text];

const ToolBar = () => {
  const isJoined = useSelector(isJoinedSelector);
  const boardName = useSelector(boardNameSelector);
  const [selectedTool, setSelectedTool] = useState();
  const [showOptionsTool, setShowOptionsTool] = useState();
  const [pencilColor, setPencilColor] = useState(drawingsColors.black);
  const [penColor, setPenColor] = useState(drawingsColors.black);
  const [highlighterColor, setHighlighterColor] = useState(drawingsColors.black);
  const [textColor, setTextColor] = useState(drawingsColors.black);

  const downloadBoard = useCallback(
    () => triggerDownload(
      new Blob([drawingsService.exportBoard()]),
      `${boardName}.svg`, // @todo get from function?
    ),
    [boardName],
  );

  // @todo rework this
  const clickTool = useCallback(
    (tool) => {
      setShowOptionsTool();

      switch (tool) {
        case tools.image:
          triggerUpload().then(
            drawingsService.tools[tool].activate,
            () => console.log('!!!.cancelled'),
          );
          break;

        case tools.clear:
          drawingsService.tools[tool].activate();
          break;

        default:
          if (selectedTool === tool) {
            if (toolsWithOptions.includes(tool)) {
              // Show options
              setShowOptionsTool(tool);
            }
          } else {
            drawingsService.tools[tool].activate();
            setSelectedTool(tool);
          }
          break;
      }
    },
    [selectedTool, setSelectedTool],
  );

  const clickToolOption = useCallback(
    (tool, color) => {
      switch (tool) {
        case tools.pencil:
          drawingsService.tools.pencil.setColor(color);
          setPencilColor(color);
          break;

        case tools.pen:
          drawingsService.tools.pen.setColor(color);
          setPenColor(color);
          break;

        case tools.highlighter:
          drawingsService.tools.highlighter.setColor(color);
          setHighlighterColor(color);
          break;

        case tools.text:
          drawingsService.tools.text.setColor(color);
          setTextColor(color);
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
        <ToolButton
          icon={<SelectionIcon />}
          onClick={() => clickTool(tools.selector)}
          selected={selectedTool === tools.selector}
        />
        <ToolButton
          icon={<PointerIcon />}
          onClick={() => clickTool(tools.pointer)}
          selected={selectedTool === tools.pointer}
        />
        <ToolButton
          icon={<TextIcon />}
          color={textColor}
          onClick={() => clickTool(tools.text)}
          selected={selectedTool === tools.text}
        >
          <ToolOptions show={showOptionsTool === tools.text}>
            {Object.values(drawingsColors).map((color) => (
              <ToolButton
                icon={<CircleIcon />}
                color={color}
                onClick={(e) => {
                  e.stopPropagation();
                  clickToolOption(tools.text, color);
                }}
              />
            ))}
          </ToolOptions>
        </ToolButton>
        <ToolButton
          icon={<ImageIcon />}
          onClick={() => clickTool(tools.image)}
        />
        <ToolButton
          icon={<DownloadIcon />}
          onClick={downloadBoard}
        />
        <ToolButton
          icon={<ResetIcon />}
          onClick={() => clickTool(tools.clear)}
        />
      </STools>
    </SWrapper>
  );
};

export default ToolBar;
