import styled from '@xstyled/styled-components';

import backgroundImg from '#theme/images/homebg.jpg';

export default styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: minContentHeight;
  flex: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg});
  background-position: top;
  background-size: cover;
  color: white;
`;
