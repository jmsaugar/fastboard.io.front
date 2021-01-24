import styled, { css, down } from '@xstyled/styled-components';

import Card from '../Card';

export const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${down('md', css`text-align: center;`)}
`;

export const SHeader = styled.h2`
  margin: 0;
  font-size: xlg;
`;

export const SContent = styled.ul`
  padding: 0;
  margin: default 0;
  list-style: none;
`;

export const SUser = styled.li`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: default;
  }
`;

export const SUserJoinDate = styled.span`
  color: primary;
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${down('md', css`button { width: 100%; }`)}
`;
