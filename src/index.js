import React from 'react';
import ReactDOM from 'react-dom'
import Routers from './Routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from './assets/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
