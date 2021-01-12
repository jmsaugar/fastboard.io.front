import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

export const SWrapper = styled.footer`
  display: flex;
  height: footer;
  min-height: footer;
  align-items: center;
  justify-content: flex-end;
  padding-right: default;
  padding-left: default;
  background-color: bg;
  color: fg;
  font-family: brand;
  font-size: lg;
`;

const linkStyle = `
  color: fg;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SLink = styled(Link)`
  ${linkStyle}
`;

export const SExternalLink = styled.a`
  ${linkStyle}
`;

export const SSeparator = styled.span`
  margin: 6px;
`;
