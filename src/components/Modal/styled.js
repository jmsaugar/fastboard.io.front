import styled from '@xstyled/styled-components';

const common = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: default;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};

`;

export const SBackground = styled(common)`
  background-color: rgba(0, 0, 0, 0.47);
`;

export const SContent = styled(common)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
