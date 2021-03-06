import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100vw;
        height: 100%;
        background-color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    input, button{
        outline: none;
        border: none;      
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle
