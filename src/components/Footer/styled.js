import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

// @todo font sizes and spaces to theme?

export const SWrapper = styled.div`
  display: flex;
  height: footer;
  align-items: center;
  justify-content: flex-end;
  padding-right: default;
  padding-left: default;

  background-color: bg;
  color: fg;

  font-family: brand;
  font-size: 18px;
`;

export const SLink = styled(Link)`
  color: fg;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SSeparator = styled.span`
  margin: 6px;
`;
