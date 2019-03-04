import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import Map from '../Map'

const PlaceContainer = styled.li`
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

class Place extends Component {
  static defaultProps = {
    places: []
  }
  handleClick = () => {
    const { id } = this.props.place
    this.props.history.push(`/${id}`)
  }

  render () {
    const { zoomCenter, scale, id, name, photoPlace, photoTime, places } = this.props.place
    const config =  { zoomCenter, scale }
    const img = require(`../../images/${id}/00.jpg`)
    const bgStyle = {
      backgroundImage: `url(${img})`
    }
    return (
      <PlaceContainer id={id} onClick={this.handleClick}>
        <Cover>
          <Map config={config} places={places} />
        </Cover>
        <Background style={bgStyle} />
        <TitleGroup>
          <Title>{name}</Title>
          <Subtitle>{photoPlace}</Subtitle>
          <Subtitle>{photoTime}</Subtitle>
        </TitleGroup>
      </PlaceContainer>
    )
  }
}
export default withRouter(Place)
