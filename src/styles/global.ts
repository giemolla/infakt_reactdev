import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle<{}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px;
  }

  #root {
    width: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    width: inherit;
    color: inherit;
  }
`;
