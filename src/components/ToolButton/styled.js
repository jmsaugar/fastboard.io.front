import styled, { css } from '@xstyled/styled-components';
import {
  breakpoints, getColor, getSize, getTransition, variant,
} from '@xstyled/system';

export const SWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-style: default;
  border-color: ${({ color, isSelected }) => ((color && isSelected) ? color : getColor('border'))};
  background-color: bg;
  border-radius: rounded;
  transition: box-shadow ${getTransition('default')};

  &:hover {
    box-shadow: default;
    cursor: pointer;
  }
  &:active {
    background-color: bgActive;
  }

  ${breakpoints({
    xs : css`
      width: ${getSize('toolButtonSm')};
      height: ${getSize('toolButtonSm')};
      margin: auto xxs;
    `,
    sm : css`
      width: ${getSize('toolButtonMd')};
      height: ${getSize('toolButtonMd')};
    `,
    xl : css`
      width: ${getSize('toolButtonLg')};
      height: ${getSize('toolButtonLg')};
      margin: auto sm;
    `,
  })}

  ${variant({
    default  : false,
    prop     : 'isLoading',
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

  ${variant({
    default  : false,
    prop     : 'isSelected',
    variants : {
      true  : css`border-width: xlg;`,
      false : css`border-width: default;`,
    },
  })}
`;

export const SIcon = styled.span`
  & > svg {
    color: ${({ color }) => color};

    ${breakpoints({
    xs : css`
      width: 10px;
      height: 10px;
    `,
    sm : css`
      width: 14px;
      height: 14px;
    `,
    xl : css`
      width: 18px;
      height: 18px;
    `,
  })}
  }
`;
