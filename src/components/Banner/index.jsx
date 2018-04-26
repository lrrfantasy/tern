import React, { Component } from 'react'

import Map from '../Map'
import countries from '../../data/countries'

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#79b6d2',
    popupOnHover: false,
    highlightOnHover: false
  },
  fills: {
    defaultFill: 'transparent',
    visited: '#cd5c5c',
    home: '#f4a7b9'
  },
  responsive: true
}

export default class Banner extends Component {
  render () {
    const config = { ...defaultConfig, ...{
      data: countries.reduce((prev, cur) => {
        prev[cur] = { fillKey: 'visited' }
        return prev
      }, { CHN: { fillKey: 'home' } })
    }}
    return (
      <div>
        <Map config={config} banner />
      </div>
    )
  }
}