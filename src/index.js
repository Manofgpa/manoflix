import React from 'react';
import ReactDOM from 'react-dom'
import Routers from './Routers'
import GlobalStyle from './assets/globalStyled'
import 'bootstrap/dist/css/bootstrap.min.css'
import starter from './config/starter'

starter()

ReactDOM.render(
  <React.Fragment>
    <Routers />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
);
