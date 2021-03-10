import styled, { css, breakpoints, up } from '@xstyled/styled-components';
import { getSpace } from '@xstyled/system';

// @todo refactor this - with About section
export const SWrapper = styled.div`
  margin: auto;
  text-align: justify;
  max-width: miscSectionWidth;

  ${breakpoints({
    xs : css`padding: default;`,
    sm : css`padding: 40px;`,
    md : css`padding: 40px 80px;`,
    lg : css`padding: 40px 120px;`,
  })}
`;

export const SLine = styled.hr`
  border-width: default;
  border-style: solid;
  border-color: border;
  margin-top: xl;
  margin-bottom: xl;
`;

export const SHeader = styled.h1`
  margin-top: default;
  margin-bottom: default;
  font-size: 40px;
  text-align: center;
`;

export const SSubHeader = styled.h2`
  margin-top: default;
  margin-bottom: default;
  font-size: xlg;
  text-align: center;
`;

export const SContent = styled.div`
  margin-top: ${({ extraSpace }) => (extraSpace ? getSpace('xl') : getSpace('default'))};
  text-align: center;
`;

export const SSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: default;

  ${up('md', css`
    height: 300px;
    flex-direction: row;
    margin-top: 60px;
  `)}
`;

export const SSectionImage = styled.div`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${up('md', css`
    width: 45%;
    height: 100%;
    order: ${({ invert }) => (invert ? '1' : 'unset')};
  `)}
`;

export const SSectionText = styled.div`
  box-sizing: border-box;
  padding: default;

  ${up('md', css`width: 45%;`)}
`;

export const SSectionTextHeader = styled.h3`
  font-size: xlg;
`;
