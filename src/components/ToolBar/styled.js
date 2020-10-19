import styled from '@xstyled/styled-components';
import { getSpace } from '@xstyled/system';

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
`;
