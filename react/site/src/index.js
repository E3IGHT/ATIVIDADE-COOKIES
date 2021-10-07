import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/all-products/index'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/detalhe" component={}/>
          <Route path="/carrinho" component={}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

