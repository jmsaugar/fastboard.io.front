import styled, { css } from '@xstyled/styled-components';
import { variant, getSize, getSpace } from '@xstyled/system';

export default styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: default;
  border-style: default;
  border-radius: default;
  outline: 0;
  transition: default;

  ${variant({
    default  : 'primary',
    prop     : 'type',
    variants : {
      primary : css`
        border-color: primary;
        background-color: primary;
        color: primaryContrast;
        &:active {
          background-color: primaryActive;
        }
      `,
      secondary : css`
        border-color: border;
        background-color: bg;
        color: fg;
        &:active {
          background-color: bgActive;
        }
      `,
    },
  })}

  ${variant({
    default  : 'default',
    prop     : 'size',
    variants : {
      default : css`
        width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidth'))};
        height: formHeight;
        padding: ${({ isLoading }) => (isLoading ? getSpace('xxs') : getSpace('xs'))} ${getSpace('md')};
        font-size: default;
      `,
      md : css`
        width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidthMd'))};
        height: formHeightMd;
        padding: default;
        font-size: lg;
        font-weight: bold;
      `,
      lg : css`
        width: ${({ fullWidth }) => (fullWidth ? '100%' : getSize('buttonWidthLg'))};
        height: formHeightLg;
        padding: default;
        font-size: xxlg;
        font-weight: bold;
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
