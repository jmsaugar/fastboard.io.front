import styled from '@xstyled/styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: default;

  div + div {
    margin-top: xs;
  }
`;
