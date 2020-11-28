import styled, { css } from '@xstyled/styled-components';
import {
  getBorderWidth, getColor, getSize, getTransition, variant,
} from '@xstyled/system';

export const SWrapper = styled.div`
  display: flex;
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
    prop     : 'selected',
    variants : {
      true : css`
        width: calc(${getSize('toolButton')} - 2*(${getBorderWidth('xlg')}));
        height: calc(${getSize('toolButton')} - 2*(${getBorderWidth('xlg')}));
        border-width: xlg;
      `,
      false : css`
        width: calc(${getSize('toolButton')} - 2*(${getBorderWidth('default')}));
        height: calc(${getSize('toolButton')} - 2*(${getBorderWidth('default')}));
        border-width: default;
      `,
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
