import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`


:root{
    --primary-bg: #C0C9E3;
    --font-color:#ffffff;
    --green-color: #219147;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: var(--font-color);
    font-family: Raleway;
}



body{
    background-color: var(--primary-bg);
  
}

p{
    color:var(--font-color) ;
}
`;

export default GlobalStyles;