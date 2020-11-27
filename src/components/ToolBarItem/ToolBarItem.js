import React, { useCallback, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Pen as PencilIcon } from '@styled-icons/fa-solid/Pen';
import { Marker as PenIcon } from '@styled-icons/fa-solid/Marker';
import { Highlighter as HighlighterIcon } from '@styled-icons/fa-solid/Highlighter';
import { Eraser as EraserIcon } from '@styled-icons/fa-solid/Eraser';
import { HandPointer as PointerIcon } from '@styled-icons/fa-solid/HandPointer';
import { Image as ImageIcon } from '@styled-icons/fa-solid/Image';
import { Font as TextIcon } from '@styled-icons/fa-solid/Font';
import { MousePointer as SelectionIcon } from '@styled-icons/fa-solid/MousePointer';
import { FileDownload as DownloadIcon } from '@styled-icons/fa-solid/FileDownload';
import { Trash as ResetIcon } from '@styled-icons/fa-solid/Trash';
import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

import { drawingColors, tools } from '#constants';
import { useOutsideClick } from '#hooks';
import { drawingsService } from '#services';
import { triggerDownload, triggerUpload } from '#utils';
import {
  boardNameSelector,
  selectedToolSelector,
  toolsColorsSelector,
  setSelectedTool,
  setToolColor,
} from '#store';

import ToolButton from '../ToolButton';
import ToolOptions from '../ToolOptions';

const tool2icon = Object.freeze({
  [tools.pencil]      : <PencilIcon />,
  [tools.pen]         : <PenIcon />,
  [tools.highlighter] : <HighlighterIcon />,
  [tools.eraser]      : <EraserIcon />,
  [tools.pointer]     : <PointerIcon />,
  [tools.text]        : <TextIcon />,
  [tools.selector]    : <SelectionIcon />,
  [tools.image]       : <ImageIcon />,
  [tools.clear]       : <ResetIcon />,
  [tools.export]      : <DownloadIcon />,
});

const ToolBarItem = ({ tool }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const boardName = useSelector(boardNameSelector);

  const selectedTool = useSelector(selectedToolSelector);
  const toolsColors = useSelector(toolsColorsSelector);
  const selectedToolColor = toolsColors[tool];

  const isSelected = selectedTool === tool;

  const hideOptions = useCallback(
    () => setShowOptions(false),
    [setShowOptions],
  );

  useOutsideClick(ref, hideOptions);

  const useTool = useCallback(
    () => {
      switch (tool) {
        case tools.pencil:
        case tools.pen:
        case tools.highlighter:
        case tools.text:
          if (isSelected) {
            if (showOptions) {
              hideOptions();
            } else {
              setShowOptions(true);
            }
          } else {
            dispatch(setSelectedTool(tool));
            drawingsService.tools[tool].activate();
          }
          break;

        case tools.eraser:
        case tools.pointer:
        case tools.selector:
          dispatch(setSelectedTool(tool));
          drawingsService.tools[tool].activate();
          break;

        case tools.image:
          triggerUpload().then(
            drawingsService.tools[tool].activate,
            () => console.log('!!!.upload.cancelled'),
          );
          break;

        case tools.clear:
          drawingsService.tools[tool].activate();
          break;

        case tools.export:
          triggerDownload(
            new Blob([drawingsService.exportBoard()]),
            `${boardName}.svg`,
          );
          break;

        default:
          break;
      }
    },
    [showOptions, isSelected, tool, boardName, dispatch, hideOptions],
  );

  return (
    <ToolButton
      ref={ref}
      icon={tool2icon[tool]}
      color={selectedToolColor}
      onClick={useTool}
      selected={isSelected}
    >
      <ToolOptions show={showOptions}>
        {Object.values(drawingColors).map((color) => (
          <ToolButton
            key={color}
            icon={<CircleIcon />}
            color={color}
            onClick={(evt) => {
              evt.stopPropagation();

              // @todo use thunk to set color in tool when dispatching "setToolColor"?
              drawingsService.tools[tool].setColor(color);
              dispatch(setToolColor({ tool, color }));

              hideOptions();
            }}
          />
        ))}
      </ToolOptions>
    </ToolButton>
  );
};

ToolBarItem.propTypes = {
  tool : propTypes.oneOf(Object.values(tools)).isRequired,
};

export default ToolBarItem;
