import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';

export default styled.div`
  display: inline;

  ${variant({
    default  : false,
    prop     : 'isClickable',
    variants : {
      true : css`
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      `,
      false : '',
    },
  })}

  & + & {
    margin-left: xxs;
  }
`;
