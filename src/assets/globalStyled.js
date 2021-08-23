import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
}

body{
    font-family: 'roboto',sans-serif;
    background-color: #3C1518;
}

#root {
    height: 100vh;
    display: flex;
    flex-direction: column;
}


`

export default GlobalStyle