import styled from '@xstyled/styled-components';
import { ExclamationCircle as ErrorIcon } from '@styled-icons/fa-solid/ExclamationCircle';

export const SWrapper = styled.div`
  width: modalWidth;
  padding: default;
  background-color: bg;
  border-radius: default;
`;

export const SHeader = styled.h2`
  margin: 0;
  color: error;
  font-size: xlg;
`;

export const SErrorIcon = styled(ErrorIcon)`
  width: 34px;
  height: 34px;
  margin-top: -4px;
  margin-right: sm;
`;

export const SContent = styled.div`
  flex: 1;
  margin: default 0;
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
