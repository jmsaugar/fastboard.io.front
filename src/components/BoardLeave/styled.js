import styled, { css, down } from '@xstyled/styled-components';
import { ExclamationCircle as ErrorIcon } from '@styled-icons/fa-solid/ExclamationCircle';

import Card from '../Card';

export const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${down('md', css`text-align: center;`)}
`;

export const SHeader = styled.h2`
  margin: 0;
  color: warning;
  font-size: xlg;
`;

export const SErrorIcon = styled(ErrorIcon)`
  width: 34px;
  height: 34px;
  margin-top: -4px;
  margin-right: sm;
`;

export const SContent = styled.div`
  margin: default 0;
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button + button {
    margin-left: sm;
  }

  ${down('md', css`button { width: 100%; }`)}
`;
