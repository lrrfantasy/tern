import React, { Component } from 'react'
import {
  ComposableMap, ZoomableGroup, Geographies, Geography, Lines, Line
} from 'react-simple-maps'
import styled from 'styled-components'

import buildCurve from '../../utils/buildCurve'
import countries from '../../data/countries'
import flights from '../../data/flights'

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  svg {
    z-index: -1;
    position: fixed !important;
  }
`

const flightConfig = {
  default: { stroke: '#79b6d2', fill: 'transparent' },
  hover: { stroke: '#79b6d2', fill: 'transparent' },
  pressed: { stroke: '#79b6d2', fill: 'transparent' },
}

export default class Banner extends Component {
  getFlights = (map) => {
    const { cities, routes } = flights
    const arcs = routes.map(({ src, dst }) => ({
      start: cities[src],
      end: cities[dst]
    }))
    return arcs
  }
  render () {
    return (
      <BannerContainer>
        <ComposableMap
          style={{
            width: '100%',
            height: 'auto',
          }}>
          <ZoomableGroup disablePanning>
            <Geographies geography='/world-50m.json'>
              {
                (geographies, projection) => geographies.map(geography => {
                  const countryConfig = {
                    fill: countries.includes(geography.id)
                      ? '#cd5c5c'
                      : geography.id === 'CHN' ? '#f4a7b9' : 'rgba(255, 255, 255, 0.15)',
                    stroke: '#91989f',
                    strokeWidth: 0.4,
                    outline: 'none',
                  }
                  const countryStyle = {
                    default: countryConfig,
                    hover: countryConfig,
                    pressed: countryConfig,
                  }
                  return (
                    <Geography
                      key={geography.id}
                      geography={geography}
                      projection={projection}
                      style={countryStyle}
                    />
                  )
                })
              }
            </Geographies>
            <Lines>
              {
                this.getFlights().map((flight, i) => (
                  <Line line={{ coordinates: flight }} style={flightConfig}
                    buildPath={buildCurve} key={i} />
                ))
              }
            </Lines>
          </ZoomableGroup>
        </ComposableMap>
      </BannerContainer>
    )
  }
}
