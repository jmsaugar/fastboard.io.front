import styled from '@xstyled/styled-components';

export default styled.div`
  @keyframes appear {
    from {
      opacity: 0;
      transform: translate(0, 100%);
    }
  }

  display: flex;
  width: notificationWidth;
  justify-content: center;
  padding: default;
  animation: appear .2s ease-in-out;
  background-color: rgba(255, 255, 255, .94);
  border-radius: default;
  box-shadow: default;
  color: fg;
  font-size: sm;
`;
