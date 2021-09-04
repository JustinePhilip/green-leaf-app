import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`


:root{
    --primary-bg: #C0C9E3;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
}



body{
    background-color: var(--primary-bg);
  
}
`;

export default GlobalStyles;