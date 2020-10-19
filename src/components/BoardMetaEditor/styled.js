import styled from '@xstyled/styled-components';

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: modalWidth;
  height: 250px;
  background-color: bg;
  padding: default;
  border-radius: default;
`;

export const SHeader = styled.h2`
  margin: 0;
  font-size: xlg;
`;

export const SContent = styled.div`
  flex: 1;
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button + button {
    margin-left: sm;
  }
`;
