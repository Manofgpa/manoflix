import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body{
    font-family: 'roboto',sans-serif;
    background-color: #3C1518;
}
h1, footer, ul, a {
    font-family: 'Bebas Neue', cursive;
}

body, #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

`

export default GlobalStyle