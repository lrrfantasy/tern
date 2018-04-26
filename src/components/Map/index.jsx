import React, { Component } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

import Datamaps from 'datamaps'

const BannerContainer = styled.div`
  svg {
    z-index: -1;
    position: fixed !important;
  }
`
const ThumbnailContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  svg {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.75);
  }
`

export default class Map extends Component {
  componentDidMount () {
    const { config, onMapInit } = this.props
    config.element = ReactDom.findDOMNode(this.refs.container)
    const map = new Datamaps(config)
    if (onMapInit) {
      onMapInit(map)
    }
  }

  render () {
    const Container = this.props.banner ? BannerContainer : ThumbnailContainer
    return (
      <Container ref='container'></Container>
    )
  }
}