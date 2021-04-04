import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
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

import {
  exportedImageExtension, drawingColors, mainLayoutId, tools, notificationTypes,
} from '#constants';
import { useOutsideClick } from '#hooks';
import { drawingsService } from '#services';
import { triggerDownload, triggerUpload, noop } from '#utils';
import {
  addNotification, boardNameSelector, selectedToolSelector, toolsColorsSelector,
} from '#store';

import ClearConfirmation from '../ClearConfirmation';
import Modal from '../Modal';
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
  const dispatch = useDispatch();

  const selectedTool = useSelector(selectedToolSelector);
  const toolsColors = useSelector(toolsColorsSelector);
  const selectedToolColor = toolsColors[tool];

  const [isLoading, setIsLoading] = useState(false);
  const isSelected = selectedTool === tool;

  const [showClearConfirmation, setShowClearConfirmation] = useState(false);

  const hideOptions = useCallback(
    () => setShowOptions(false),
    [setShowOptions],
  );

  useOutsideClick(ref, hideOptions);

  const ClearConfirmationComponent = useMemo(
    () => {
      if (tool !== tools.clear) {
        return undefined;
      }

      return (
        <Modal target={mainLayoutId} show={showClearConfirmation}>
          <ClearConfirmation
            onConfirm={() => {
              drawingsService.tools[tool].activate();
              setShowClearConfirmation(false);
            }}
            onCancel={() => setShowClearConfirmation(false)}
          />
        </Modal>
      );
    },
    [tool, showClearConfirmation, setShowClearConfirmation],
  );

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
            .catch(noop) // Upload cancelled, do nothing
            .finally(() => setIsLoading(false));
          break;

        case tools.clear:
          setShowClearConfirmation(true);
          break;

        case tools.export:
          setIsLoading(true);
          drawingsService.exportBoard()
            .then((blob) => triggerDownload(blob, `${boardName}.${exportedImageExtension}`))
            .catch(() => dispatch(addNotification({ type : notificationTypes.boardExportError })))
            .finally(() => setIsLoading(false));
          break;

        default:
          break;
      }
    },
    [dispatch, showOptions, isSelected, tool, boardName, hideOptions, boardId],
  );

  return (
    <>
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
      {ClearConfirmationComponent}
    </>
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
