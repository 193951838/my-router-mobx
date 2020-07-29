import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import { Provider } from 'mobx-react';
import Routers from './router/index.js';

ReactDom.render(
  <Provider store={store}>
    <Routers />
  </Provider>
 , document.getElementById('app')
)