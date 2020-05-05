import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html, body, #root {
  height: 100%;
  background-image: linear-gradient(to bottom, #7289da 10%, #021586);
}
body{
  -webkit-font-smoothing: antialiased !important;
}
body, input, button {
  font: 14px 'Montserrat', sans-serif;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;
