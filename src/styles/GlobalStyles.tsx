import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;

    }
`

export default GlobalStyle
