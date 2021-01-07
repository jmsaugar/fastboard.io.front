import styled, { css, down } from '@xstyled/styled-components';
import { getSpace } from '@xstyled/system';

// @todo min-width
export const SWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const SMeta = styled.div`
  position: absolute;
  top: ${getSpace('sm')};
  left: ${getSpace('default')};
`;

export const STools = styled.div`
  display: flex;
  margin-top: sm;

  ${down('xl', css`
    position: absolute;
    right: 0;
  `)}
`;
