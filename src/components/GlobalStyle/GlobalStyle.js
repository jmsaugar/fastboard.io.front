import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getFont } from '@xstyled/system';

import BlinkerBold from '../../theme/fonts/Blinker-Bold.ttf';
import MontserratRegular from '../../theme/fonts/Montserrat-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'BlinkerBold';
    src: local('BlinkerBold'), url(${BlinkerBold}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratRegular';
    src: local('MontserratRegular'), url(${MontserratRegular}) format('truetype');
  }

  body {
    font-family: ${getFont('default')};
  }
`;

export default GlobalStyle;
