import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as d3 from 'd3'

import Map from '../Map'

const PlaceContainer = styled.div`
  position: relative;
  color: white;
  font-weight: lighter;
  cursor: pointer;
`
const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  padding: 150px 0 0 200px;
  z-index: 1;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #326;
  background-blend-mode: lighten;
`
const TitleGroup = styled.hgroup`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  text-align: right;
  z-index: 2;
`
const Title = styled.h2`
  font-size: 40px;
  line-height: 46px;
`
const Subtitle = styled.h3`
  margin: 3px 0;
  font-size: 16px;
  line-height: 22px;
`

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#79b6d2',
    highlightFillColor: 'rgba(0, 0, 0, 0.3)',
    highlightBorderColor: '#79b6d2',
    popupTemplate: (geography, data) => {
      return `<div style="font-family: 'Open Sans'">${geography.properties.name}</div>`
    },
  },
  fills: {
    defaultFill: 'transparent',
    city: '#cd5c5c'
  }
}

const bubblesConfig = {
  borderWidth: 0,
  fillOpacity: 1,
  highlightFillColor: '#ff8f8f',
  highlightBorderWidth: 0,
  highlightFillOpacity: 1,
  animate: false,
  popupTemplate: (geography, data) => {
    return `<div style="font-family: 'Open Sans'">${data.name}</div>`
  }
}

function zoom (center, scale) {
  return (element) => {
    const projection = d3.geoMercator()
      .center(center)
      .scale(scale)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2])
    const path = d3.geoPath(projection)
    return { path, projection }
  }
}

export default class Place extends Component {
  static defaultProps = {
    places: []
  }

  drawCity = (map) => {
    const { places } = this.props.place
    const bubbles = places.map(place => {
      return {
        name: place.name,
        radius: 5,
        fillKey: 'city',
        latitude: place.latitude,
        longitude: place.longitude
      }
    })
    map.bubbles(bubbles, bubblesConfig)
  }

  render () {
    const { zoomCenter, scale, id, name, photoPlace, photoTime } = this.props.place
    const config =  { ...defaultConfig, ...{
      setProjection: zoom(zoomCenter, scale),
    }}
    const img = require(`../../images/${id}/00.jpg`)
    const bgStyle = {
      backgroundImage: `url(${img})`
    }
    return (
      <Link to={`/${id}`}>
        <PlaceContainer>
          <Cover>
            <Map config={config} onMapInit={this.drawCity} />
          </Cover>
          <Background style={bgStyle} />
          <TitleGroup>
            <Title>{name}</Title>
            <Subtitle>{photoPlace}</Subtitle>
            <Subtitle>{photoTime}</Subtitle>
          </TitleGroup>
        </PlaceContainer>
      </Link>
    )
  }
}
