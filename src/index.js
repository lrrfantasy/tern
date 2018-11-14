import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

import Indonesia from './pages/Indonesia'
import UK from './pages/UK'
import Thailand from './pages/Thailand'
import India from './pages/India'
import Japan from './pages/Japan'
import Australia from './pages/Australia'
import Denmark from './pages/Denmark'
import JapanTwo from './pages/JapanTwo'
import USA from './pages/USA'
import Mauritius from './pages/Mauritius'
import SouthKorea from './pages/SouthKorea'
import JapanThree from './pages/JapanThree'
import Philippines from './pages/Philippines'
import JapanFour from './pages/JapanFour'
import Kenya from './pages/Kenya'
import AustraliaTwo from './pages/AustraliaTwo'

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

      <Route path='/indonesia' component={Indonesia} />
      <Route path='/uk' component={UK} />
      <Route path='/thailand' component={Thailand} />
      <Route path='/india' component={India} />
      <Route path='/japan' component={Japan} />
      <Route path='/australia' component={Australia} />
      <Route path='/denmark' component={Denmark} />
      <Route path='/japan-two' component={JapanTwo} />
      <Route path='/usa' component={USA} />
      <Route path='/mauritius' component={Mauritius} />
      <Route path='/south-korea' component={SouthKorea} />
      <Route path='/japan-three' component={JapanThree} />
      <Route path='/philippines' component={Philippines} />
      <Route path='/japan-four' component={JapanFour} />
      <Route path='/kenya' component={Kenya} />
      <Route path='/australia-two' component={AustraliaTwo} />
    </div>
  </Router>,
  document.getElementById('root')
)
