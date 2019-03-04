import React from 'react'
import styled from 'styled-components'

import places from '../../data/places'

const Container = styled.div`
  position: fixed;
  width: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
`
const ListItem = styled.li`
  display: inline-block;
  position: relative;
`
const StayItem = styled.div`
  font-size: 24px;
  margin: 4px;
  cursor: pointer;
  &:hover + div {
    display: block;
  }
`
const ExpandItem = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.6);
  font-weight: lighter;
  white-space: nowrap;
`

const handleClick = (id) => {
  const el = document.getElementById(id)
  el.scrollIntoView({ behavior: 'smooth' })
}

const Navigation = () => (
  <Container>
    <ol>
      {
        places.map(({ id, flag, name }) => (
          <ListItem key={id}>
            <StayItem onClick={() => handleClick(id)}>
              <span role="img" aria-label={id}>{flag}</span>
            </StayItem>
            <ExpandItem>{name}</ExpandItem>
          </ListItem>
        ))
      }
    </ol>
  </Container>
)

export default Navigation
