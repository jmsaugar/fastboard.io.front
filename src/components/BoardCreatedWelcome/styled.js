import styled, { css, down } from '@xstyled/styled-components';
import { getFontSize } from '@xstyled/system';
import { Copy as CopyIcon } from '@styled-icons/fa-solid/Copy';

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

export const SContent = styled.div`
  margin: default 0;
  div {
    margin-bottom: default;
  }
`;

export const SLink = styled.div`
  color: primary;
  font-style: italic;
`;

export const SCopyIcon = styled(CopyIcon)`
  width: ${getFontSize('default')};
  height: ${getFontSize('default')};
  margin-right: xs;
  color: fg;
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${down('md', css`button { width: 100%; }`)}
`;
