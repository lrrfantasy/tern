import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import Philippines from './pages/Philippines'
import JapanFour from './pages/JapanFour'

import './index.css';

const ScrollTop = () => {
  window.scrollTo(0, 0)
  return null
}

ReactDOM.render(
  <Router>
    <div>
      <Route component={ScrollTop} />
      <Route exact path='/' component={App} />
      <Route path='/philippines' component={Philippines} />
      <Route path='/japan-four' component={JapanFour} />
    </div>
  </Router>,
  document.getElementById('root')
)
