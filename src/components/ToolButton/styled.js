import styled from '@xstyled/styled-components';

export const SWrapper = styled.div`
  height: 42px;
  width: 42px;
  border-radius: rounded;
  border-width: default;
  border-style: default;
  border-color: border;
  margin: auto sm;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: default;
  &:hover {
    box-shadow: default;
    cursor: pointer;
  }
`;

export const SIcon = styled.span`
  & > svg {
    width: 18px;
    height: 18px;
  }
`;
