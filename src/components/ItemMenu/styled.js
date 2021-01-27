import styled from '@xstyled/styled-components';
import { getSize } from '@xstyled/system';

export const SWrapper = styled.div`
  position: absolute;
  z-index: top;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${getSize('itemMenuWidth')};
  box-sizing: border-box;
  border-width: default;
  border-style: default;
  border-color: border;
  background-color: bg;
  border-radius: default;
  box-shadow: default;
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

export const SItem = styled.div`
  padding: xs md;

  transition: default;

  &:hover {
    background-color: bgHover;
    cursor: pointer;
  }
`;
