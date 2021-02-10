import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';

import variants from './variants';

export default styled.div`
  @keyframes appear {
    from {
      opacity: 0;
      transform: translate(0, 100%);
    }
  }

  display: flex;
  width: notificationWidth;
  justify-content: center;
  padding: default;
  animation: appear .2s ease-in-out;
  border-radius: default;
  box-shadow: default;
  font-size: sm;

  ${variant({
    default  : 'generic',
    prop     : 'variant',
    variants : {
      [variants.info] : css`
        background-color: rgba(255, 255, 255, .94);
        color: fg;
      `,
      [variants.warning] : css`
        background-color: rgba(255, 170, 60, .94);
        color: #fff;
      `,
      [variants.error] : css`
        background-color: rgba(255, 80, 80, .94);
        color: #fff;
      `,
    },
  })}
`;
