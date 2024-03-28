import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({theme}) => theme.colors.background_1};
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9)
  }
`

export default GlobalStyles