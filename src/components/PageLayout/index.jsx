import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FullLink = styled.a`
  width: 100%;
`
const HorizonLink = styled.a`
  width: 45%;
`
const Button = styled.div`
  margin: 0 auto;
  width: 200px;
  border: 1px solid white;
  text-align: center;
  a {
    display: block;
    padding: 20px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: 0.5s;
  }
  a:hover {
    background: white;
    color: black;
  }
`

export const Section = styled.section`
  margin: 150px 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Image = styled.img`
  width: 100%;
`

export const LinkedImage = ({src, horizontal}) => {
  const LinkWrapper = horizontal ? HorizonLink : FullLink
  return (
    <LinkWrapper href={src}>
      <Image src={src} />
    </LinkWrapper>
  )
}

export const BackButton = () => (
  <Button>
    <Link to='/'>Back</Link>
  </Button>
)
