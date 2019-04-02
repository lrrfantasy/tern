import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

import {
  Indonesia, UK, Thailand, India,
  Japan, Australia, Denmark, JapanTwo, USA,
  Mauritius, SouthKorea, JapanThree, Philippines, JapanFour,
  Kenya, AustraliaTwo, Singapore, ThailandTwo,
  JapanFive,
} from './pages'

import './index.css'

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
      <Route path='/singapore' component={Singapore} />
      <Route path='/thailand-two' component={ThailandTwo} />
      <Route path='/japan-five' component={JapanFive} />
    </div>
  </Router>,
  document.getElementById('root')
)
