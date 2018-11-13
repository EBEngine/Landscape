import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App'

import './styles/header.css'
import './styles/home.css'

ReactDOM.render(
        <HashRouter>
          <App/>
        </HashRouter>,
  document.getElementById('app')
);