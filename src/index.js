import React from 'react';
import ReactDOM from 'react-dom'
import Routers from './Routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from './assets/globalStyled'

ReactDOM.render(
  <React.Fragment>
    <Routers />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
);
