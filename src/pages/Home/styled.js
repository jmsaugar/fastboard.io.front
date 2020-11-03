import styled from '@xstyled/styled-components';

import backgroundImg from '#theme/images/homebg.jpg';

export default styled.div`
  position: relative;
  width: 100%;
  padding: 200px;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg});
  background-position: top;
  background-size: cover;
  color: white;
`;
