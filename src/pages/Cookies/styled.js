import styled, { css, breakpoints } from '@xstyled/styled-components';

export const SWrapper = styled.div`
  margin: auto;
  text-align: justify;
  max-width: containerMaxWidth;

  ${breakpoints({
    xs : css`padding: default;`,
    sm : css`padding: 40px;`,
    md : css`padding: 40px 80px;`,
    lg : css`padding: 40px 120px;`,
    xl : css`padding: 40px 200px;`,
  })}
`;

export const SHeader = styled.h1`
  margin-top: default;
  margin-bottom: default;
`;

export const SSubHeader = styled.h2`
  margin-top: default;
  margin-bottom: default;
`;

export const SContent = styled.div`
  margin-top: default;
`;

export const SList = styled.ul`
`;

export const SListItem = styled.li`
  margin-top: sm;
`;

export const SListItemName = styled.span`
  margin-right: xs;
  font-weight: bold;
`;
