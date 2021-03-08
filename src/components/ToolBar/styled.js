import styled, { css, up } from '@xstyled/styled-components';
import { getSpace } from '@xstyled/system';

export const SWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
`;

export const SMeta = styled.div`
  position: absolute;
  top: ${getSpace('sm')};
  right: auto;
  left: auto;
  pointer-events: all;

  ${up('xl', css`
    left: ${getSpace('default')};
  `)}
`;

export const STools = styled.div`
  display: flex;
  margin-top: xl;
  pointer-events: all;

  ${up('xl', css`
    position: absolute;
    right: 0;
    margin-top: sm;
  `)}
`;
