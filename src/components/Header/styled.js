import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

// @todo check values for theme - font size & langSelector width

export const SWrapper = styled.header`
  display: flex;
  height: header;
  min-height: header;
  align-items: center;
  justify-content: space-between;
  padding-right: default;
  padding-left: default;

  background-color: bg;
  color: fg;
`;

export const SBanner = styled(Link)`
  color: inherit;
  font-family: brand;
  font-size: headerBrand;
  text-decoration: inherit;
`;

export const SLanguageSelector = styled.div`
  width: 110px;
`;
