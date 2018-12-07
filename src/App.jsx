import React, { Component } from 'react'

import Banner from './components/Banner'
import PlaceList from './components/PlaceList'

export default class App extends Component {
  render () {
    return (
      <main>
        <Banner />
        <PlaceList />
      </main>
    )
  }
}
