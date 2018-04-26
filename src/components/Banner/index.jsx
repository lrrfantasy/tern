import React, { Component } from 'react'

import Map from '../Map'
import countries from '../../data/countries'
import flights from '../../data/flights'

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#91989f',
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

const arcConfig = {
  strokeColor: '#79b6d2',
  arcSharpness: 0.8
  // greatArc: true
}

export default class Banner extends Component {
  renderArc = (map) => {
    const { cities, routes } = flights
    const arcs = routes.map(({ src, dst }) => ({
      origin: cities[src],
      destination: cities[dst]
    }))
    map.arc(arcs, arcConfig)
  }
  render () {
    const config = { ...defaultConfig, ...{
      data: countries.reduce((prev, cur) => {
        prev[cur] = { fillKey: 'visited' }
        return prev
      }, { CHN: { fillKey: 'home' } })
    }}
    return (
      <div>
        <Map config={config} onMapInit={this.renderArc} banner />
      </div>
    )
  }
}