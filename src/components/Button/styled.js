import styled, { css } from '@xstyled/styled-components';
import { variant, getSize, getSpace } from '@xstyled/system';

export default styled.button`
  position: relative;
  display: inline-flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidth'))};
  height: formHeight;
  align-items: center;
  justify-content: center;
  padding: ${({ isLoading }) => (isLoading ? getSpace('xxs') : getSpace('xs'))} ${getSpace('md')};
  border-width: default;
  border-style: default;
  border-radius: default;
  outline: 0;

  transition: default;

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

  ${variant({
    default  : false,
    prop     : 'isDisabled',
    variants : {
      true : css`
        pointer-events: none;
      `,
      false : css`
        cursor: pointer;

        &:hover {
          box-shadow: default;
        }
      `,
    },
  })}
`;
