import styled, { css } from '@xstyled/styled-components';
import { variant, getSize } from '@xstyled/system';

export default styled.button`
  display: flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidth'))};
  align-items: center;
  justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between' : 'center')};
  padding: xs md;
  border-width: default;
  border-style: default;
  border-radius: default;
  outline: 0;

  transition: default;

  &:hover {
    box-shadow: default;
    cursor: pointer;
  }

  ${variant({
    default  : false,
    prop     : 'primary',
    variants : {
      true : css`
        border-color: primary;
        background-color: primary;
        color: primaryContrast;
      `,
      false : css`
        border-color: border;
        background-color: bg;
        color: fg;
      `,
    },
  })}

  &:hover {
    box-shadow: default;
    cursor: pointer;
  }
`;
