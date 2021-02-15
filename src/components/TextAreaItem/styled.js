import styled from '@xstyled/styled-components';

import { selectionColorCode, textToolFontSize, selectionHandlersBorderWidth } from '#constants';

export default styled.textarea`
  position: absolute;
  top: ${({ top }) => (top - 3)}px;
  left: ${({ left }) => (left - 5)}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-width: ${selectionHandlersBorderWidth}px;
  border-color: ${selectionColorCode};
  color: ${({ textColor }) => textColor};
  font-family: sans-serif;
  font-size: ${textToolFontSize}px;
  line-height: 1.22;

  opacity: ${({ show }) => (show ? '1' : '0')};
  outline: none;
  resize: none;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;
