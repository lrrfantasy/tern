import React, { Component } from 'react'
import {
  ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker
} from 'react-simple-maps'
import styled from 'styled-components'

const ThumbnailContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  svg {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.75);
  }
`

const countryConfig = {
  fill: 'transparent',
  stroke: '#91989f',
  strokeWidth: 0.5,
  outline: 'none',
}
const countryStyle = {
  default: countryConfig,
  hover: countryConfig,
  pressed: countryConfig,
}
const markerConfig = {
  default: { fill: '#cd5c5c' },
  highlight: { fill: '#ff8f8f' }
}
const markerStyle = {
  default: markerConfig.default,
  hover: markerConfig.highlight,
  pressed: markerConfig.highlight
}
const circleStyle = {
  stroke: '#cd5c5c',
  strokeWidth: 1,
  opacity: 0.9,
}

export default class Map extends Component {
  state = {
    tip: '',
    tipX: 0,
    tipY: 0
  }
  handleTipMove = text => (marker, evt) => {
    const { clientX, clientY } = evt.nativeEvent
    this.setState({
      display: 'block',
      tip: text,
      tipX: clientX,
      tipY: clientY
    })
  }
  handleTipLeave = (marker, evt) => {
    this.setState({
      display: 'none'
    })
  }
  render () {
    const { config: { zoomCenter, scale }, places } = this.props
    const { tip, tipX, tipY, display } = this.state
    const tipStyle = {
      display,
      position: 'fixed',
      left: tipX + 10,
      top: tipY
    }
    return (
      <ThumbnailContainer>
        <span style={tipStyle}>{tip}</span>
        <ComposableMap
          projection='mercator'
          width={300}
          height={300}
          style={{
            width: '300',
            height: '300',
          }}>
          <ZoomableGroup zoom={scale} center={zoomCenter} disablePanning>
            <Geographies geography='/world-50m.json'>
              {
                (geographies, projection) => geographies.map(geography => (
                  <Geography
                    key={geography.id}
                    geography={geography}
                    projection={projection}
                    style={countryStyle}
                    onMouseMove={this.handleTipMove(geography.properties.name)}
                    onMouseLeave={this.handleTipLeave}
                  />
                ))
              }
            </Geographies>
            {
              places
                ? (
                  <Markers>
                    {
                      places.map((place, i) => (
                        <Marker marker={{ coordinates: [place.longitude, place.latitude] }}
                          style={markerStyle} key={i}
                          onMouseMove={this.handleTipMove(place.name)}
                          onMouseLeave={this.handleTipLeave}>
                          <circle cx={0} cy={0} r={3} style={circleStyle} />
                        </Marker>
                      ))
                    }
                  </Markers>
                ) : null
            }
          </ZoomableGroup>
        </ComposableMap>
      </ThumbnailContainer>
    )
  }
}
