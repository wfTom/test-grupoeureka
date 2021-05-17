import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white:#fff;
    --gray:#f2f3f5;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor:pointer;
  }

  a {
    color:inherit;
    text-decoration:none;
  }
`
