import styled, { css, up } from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

export const SWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 160px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-right: default;
  padding-left: default;
  background-color: cookiesAlertBg;
  font-size: sm;

  ${up('sm', css`
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
  `)}

  ${up('md', css`
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

export const SLink = styled(Link)`
  color: fg;
  text-decoration: underline;
`;
