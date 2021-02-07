import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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
import { Trash as ResetIcon } from '@styled-icons/fa-solid/Trash';
import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

import { drawingColors, tools } from '#constants';
import { useOutsideClick } from '#hooks';
import { drawingsService } from '#services';
import { triggerDownload, triggerUpload } from '#utils';
import { boardNameSelector, selectedToolSelector, toolsColorsSelector } from '#store';

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

const ToolBarItem = ({ boardId, tool }) => {
  const ref = useRef();
  const [showOptions, setShowOptions] = useState(false);
  const boardName = useSelector(boardNameSelector);

  const selectedTool = useSelector(selectedToolSelector);
  const toolsColors = useSelector(toolsColorsSelector);
  const selectedToolColor = toolsColors[tool];

  const [isLoading, setIsLoading] = useState(false);
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
            drawingsService.tools[tool].activate();
          }
          break;

        case tools.eraser:
        case tools.pointer:
        case tools.selector:
          drawingsService.tools[tool].activate();
          break;

        case tools.image:
          triggerUpload()
            .then((image) => {
              setIsLoading(true);
              return drawingsService.tools[tool].activate(image, boardId);
            })
            .catch(() => console.log('!!!.upload.cancelled'))
            .finally(() => setIsLoading(false));
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
    [showOptions, isSelected, tool, boardName, hideOptions, boardId],
  );

  return (
    <ToolButton
      ref={ref}
      icon={tool2icon[tool]}
      color={selectedToolColor}
      onClick={useTool}
      isSelected={isSelected}
      isLoading={isLoading}
    >
      <ToolOptions show={showOptions}>
        {Object.values(drawingColors).map((color) => (
          <ToolButton
            key={color}
            icon={<CircleIcon />}
            color={color}
            onClick={(evt) => {
              evt.stopPropagation();
              drawingsService.tools[tool].setColor(color);
              hideOptions();
            }}
          />
        ))}
      </ToolOptions>
    </ToolButton>
  );
};

ToolBarItem.defaultProps = {
  boardId : undefined,
};

ToolBarItem.propTypes = {
  tool    : PropTypes.oneOf(Object.values(tools)).isRequired,
  boardId : PropTypes.string,
};

export default ToolBarItem;
