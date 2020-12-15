import styled from '@xstyled/styled-components';

export default styled.img`
  display: inline-flex;
  width: spinner;
  height: spinner;
  justify-content: center;

  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-name: spin;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
`;
