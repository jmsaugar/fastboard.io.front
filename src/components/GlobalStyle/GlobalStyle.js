import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getColor, getFont } from '@xstyled/system';

/**
 * Fonts have to be imported this way because of a styled-components issue.
 *
 * @see https://github.com/styled-components/styled-components/issues/1593
 */
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: 100%;

    body {
      height: 100%;
      background-color: ${getColor('bg')};
      color: ${getColor('fg')};;
      font-family: ${getFont('default')};

      #root {
        height: 100%;
      }
    }
  }
`;

export default GlobalStyle;
