import styled from '@xstyled/styled-components';

// @todo check values for theme - font size & langSelector width

export const SWrapper = styled.div`
  display: flex;
  height: header;
  align-items: center;
  justify-content: space-between;
  padding-right: default;
  padding-left: default;

  background-color: bg;
  color: fg;
`;

export const SBanner = styled.span`
  font-family: brand;
  font-size: 40px;
`;

export const SLanguageSelector = styled.div`
  width: 110px;
`;
