import styled, { css } from '@xstyled/styled-components';
import {
  getBorderWidth, getSize, getSpace, variant,
} from '@xstyled/system';

export default styled.div`
  position: absolute;
  top: calc(2 * ${getSpace('sm')} + ${getSize('toolButton')} + 2 * ${getBorderWidth('default')});
  display: flex;
  flex-direction: column;
  transition: fast;

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true : css`
        opacity : 1;
        visitibilty: visible;
      `,
      false : css`
        opacity : 0;
        transform: translate(0, -10%);
        visitibilty: hidden;
        pointer-events:none;
      `,
    },
  })}

  & > div + div {
    margin-top: 6px;
  }
`;
