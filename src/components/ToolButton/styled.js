import styled, { css } from '@xstyled/styled-components';
import { getColor, getTransition, variant } from '@xstyled/system';

export const SWrapper = styled.div`
  display: flex;
  width: toolButton;
  height: toolButton;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-style: default;
  border-color: ${({ color, selected }) => ((color && selected) ? color : getColor('border'))};
  margin: auto sm;
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
    width: 18px;
    height: 18px;
    color: ${({ color }) => color};
  }
`;
