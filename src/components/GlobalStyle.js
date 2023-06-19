import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import book from '../image/80b1762027df8795b5be125f460833c7.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${book});
  background-position: center;
  background-repeat: no-repeat;
  background-size:100vw 100vw;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p, ul {
    padding: 0px;
    margin: 0px;
}
li {
  list-style: none;
}
`;
