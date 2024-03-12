import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #f0ff2f5
        font-family: Arial, Helveltica, sans-serif
    }
`;

export default GlobalStyle