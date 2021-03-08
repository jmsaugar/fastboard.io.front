import styled, { css } from '@xstyled/styled-components';
import {
  breakpoints, getBorderWidth, getSize, getSpace, variant,
} from '@xstyled/system';

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  transition: fast;

  ${breakpoints({
    xs : css`top: calc(2 * ${getSpace('xxs')} + ${getSize('toolButtonSm')} + 2 * ${getBorderWidth('default')} + ${getSpace('xl')});`,
    sm : css`top: calc(2 * ${getSpace('xxs')} + ${getSize('toolButtonMd')} + 2 * ${getBorderWidth('default')} + ${getSpace('xl')});`,
    xl : css`top: calc(2 * ${getSpace('sm')} + ${getSize('toolButtonLg')} + 2 * ${getBorderWidth('default')});`,
  })}

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true : css`
        opacity : 1;
        visibility: visible;
      `,
      false : css`
        opacity : 0;
        transform: translate(0, -10%);
        visibility: hidden;
        pointer-events:none;
      `,
    },
  })}

  & > div + div {
    margin-top: 6px;
  }
`;
