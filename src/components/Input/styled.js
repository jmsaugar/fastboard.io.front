import styled from '@xstyled/styled-components';
import { getSize, getSpace, getBorderWidth } from '@xstyled/system';

export default styled.input`
  border-width: default;
  border-style: default;
  border-radius: default;
  border-color: border;
  background-color: bg;
  color: fg;
  height: calc(${getSize('formHeight')} - 2*${getSpace('xs')} - 2*${getBorderWidth('default')});
  padding: xs md;
  outline: none;

  &:focus {
    border-color: primary;
  }

  &::placeholder {
    color: border;
    font-size: 14px;
  }
`;
