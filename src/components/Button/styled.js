import styled, { css } from '@xstyled/styled-components';
import { variant, getSize } from '@xstyled/system';

export default styled.button`
  display: inline-flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidth'))};
  align-items: center;
  justify-content: center;
  padding: xs md;
  border-width: default;
  border-style: default;
  border-radius: default;
  cursor: pointer;
  outline: 0;

  transition: default;

  &:hover {
    box-shadow: default;
  }

  ${variant({
    default  : 'default',
    prop     : 'type',
    variants : {
      primary : css`
        border-color: primary;
        background-color: primary;
        color: primaryContrast;
      `,
      secondary : css`
        border-color: border;
        background-color: bg;
        color: fg;
      `,
    },
  })}
`;
