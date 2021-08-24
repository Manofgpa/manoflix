import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: none;
}

body{
    font-family: 'roboto',sans-serif;
    background-color: #3C1518;
}

body, #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
}


`

export default GlobalStyle