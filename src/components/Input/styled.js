import styled from '@xstyled/styled-components';

export default styled.input`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: formHeight;
  box-sizing: border-box;
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
