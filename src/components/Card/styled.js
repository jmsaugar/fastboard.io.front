import styled, { css, up } from '@xstyled/styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: default;
  background-color: bg;
  border-radius: 0;

  ${up(
    'md', css`
      width: cardWidth;
      height: auto;
      border-radius: default;
    `,
  )}
`;
