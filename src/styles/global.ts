import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body {
    background: #7159c1 url(${background}) no-repeat center top;
    -webkit-font-smoothig: antialiased;
  }
`;