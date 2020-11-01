import styled, { css } from '@xstyled/styled-components';
import { getSize, getSpace, getBorderWidth } from '@xstyled/system';

export default styled.input`
  width: ${({ fullWidth }) => (fullWidth ? css`calc(100% - 2*${getSpace('md')} - 2*${getBorderWidth('default')})` : 'auto')};
  height: calc(${getSize('formHeight')} - 2*${getSpace('xs')} - 2*${getBorderWidth('default')});
  padding: xs md;
  border-width: default;
  border-style: default;
  border-color: border;
  background-color: bg;
  border-radius: default;
  color: fg;
  outline: none;

  &:focus {
    border-color: primary;
  }

  &::placeholder {
    color: border;
    font-size: 14px;
  }
`;
