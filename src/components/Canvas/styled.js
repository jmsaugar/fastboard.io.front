import styled, { css } from '@xstyled/styled-components';
import { variant, getSpace } from '@xstyled/system';

import { mapHeight, mapWidth } from '#constants';

import eraserCursor from '#theme/images/cursors/eraser.svg';
import pointerCursor from '#theme/images/cursors/pointer.svg';

import blackPencilCursor from '#theme/images/cursors/black-pencil.svg';
import redPencilCursor from '#theme/images/cursors/red-pencil.svg';
import bluePencilCursor from '#theme/images/cursors/blue-pencil.svg';
import orangePencilCursor from '#theme/images/cursors/orange-pencil.svg';
import greenPencilCursor from '#theme/images/cursors/green-pencil.svg';

import blackPenCursor from '#theme/images/cursors/black-pen.svg';
import redPenCursor from '#theme/images/cursors/red-pen.svg';
import bluePenCursor from '#theme/images/cursors/blue-pen.svg';
import orangePenCursor from '#theme/images/cursors/orange-pen.svg';
import greenPenCursor from '#theme/images/cursors/green-pen.svg';

import blackHighlighterCursor from '#theme/images/cursors/black-highlighter.svg';
import redHighlighterCursor from '#theme/images/cursors/red-highlighter.svg';
import blueHighlighterCursor from '#theme/images/cursors/blue-highlighter.svg';
import orangeHighlighterCursor from '#theme/images/cursors/orange-highlighter.svg';
import greenHighlighterCursor from '#theme/images/cursors/green-highlighter.svg';

import { cursorTypes } from './constants';

export const SCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: boardBg;

  ${variant({
    default  : cursorTypes.default,
    prop     : 'cursor',
    variants : {
      [cursorTypes.default]           : css`cursor: auto;`,
      [cursorTypes.blackPencil]       : css`cursor: url(${blackPencilCursor}) 4 4, auto;`,
      [cursorTypes.redPencil]         : css`cursor: url(${redPencilCursor}) 4 4, auto;`,
      [cursorTypes.bluePencil]        : css`cursor: url(${bluePencilCursor}) 4 4, auto;`,
      [cursorTypes.orangePencil]      : css`cursor: url(${orangePencilCursor}) 4 4, auto;`,
      [cursorTypes.greenPencil]       : css`cursor: url(${greenPencilCursor}) 4 4, auto;`,
      [cursorTypes.blackPen]          : css`cursor: url(${blackPenCursor}) 6 6, auto;`,
      [cursorTypes.redPen]            : css`cursor: url(${redPenCursor}) 6 6, auto;`,
      [cursorTypes.bluePen]           : css`cursor: url(${bluePenCursor}) 6 6, auto;`,
      [cursorTypes.orangePen]         : css`cursor: url(${orangePenCursor}) 6 6, auto;`,
      [cursorTypes.greenPen]          : css`cursor: url(${greenPenCursor}) 6 6, auto;`,
      [cursorTypes.blackHighlighter]  : css`cursor: url(${blackHighlighterCursor}) 15 15, auto;`,
      [cursorTypes.redHighlighter]    : css`cursor: url(${redHighlighterCursor}) 15 15, auto;`,
      [cursorTypes.blueHighlighter]   : css`cursor: url(${blueHighlighterCursor}) 15 15, auto;`,
      [cursorTypes.orangeHighlighter] : css`cursor: url(${orangeHighlighterCursor}) 15 15, auto;`,
      [cursorTypes.greenHighlighter]  : css`cursor: url(${greenHighlighterCursor}) 15 15, auto;`,
      [cursorTypes.eraser]            : css`cursor: url(${eraserCursor}) 15 15, auto;`,
      [cursorTypes.pointer]           : css`cursor: url(${pointerCursor}) 5 5, auto;`,
    },
  })}
`;

export const SViewControl = styled.canvas`
  position: absolute;
  bottom: ${getSpace('default')};
  left: ${getSpace('default')};
  width: ${mapWidth}px;
  height: ${mapHeight}px;
  border-width: default;
  border-style: default;
  border-color: border;
  background-color: boardBg;
  box-shadow: default;
`;
