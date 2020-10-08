import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getFont } from '@xstyled/system';

import BlinkerBold from '../../theme/fonts/Blinker-Bold.ttf';
import MontserratRegular from '../../theme/fonts/Montserrat-Regular.ttf';
import MontserratBold from '../../theme/fonts/Montserrat-Bold.ttf';

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

  @font-face {
    font-family: 'MontserratBold';
    src: local('MontserratBold'), url(${MontserratBold}) format('truetype');
  }

  html {
    height: 100%;

    body {
      font-family: ${getFont('default')};
      height: 100%;

      #root {
        height: 100%;
      }
    }
  }
`;

export default GlobalStyle;
