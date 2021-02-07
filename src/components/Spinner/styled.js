import styled, { css } from '@xstyled/styled-components';
import { getColor, variant } from '@xstyled/system';

export default styled.div`
  display: inline-block;
  border-style: solid;
  border-color: ${({ dark }) => (dark ? getColor('border') : 'white')};
  border-right-color: transparent;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-name: spin;
  animation-timing-function: linear;
  border-radius: rounded;

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  ${variant({
    default  : 'sm',
    prop     : 'size',
    variants : {
      sm : css`
        width: 12px;
        height: 12px;
        border-width: 2px;
      `,
      md : css`
        width: 18px;
        height: 18px;
        border-width: 6px;
      `,
      lg : css`
        width: 30px;
        height: 30px;
        border-width: 6px;
      `,
      // @todo xlg, for Loading component
    },
  })}
`;
