import React from 'react'
import styled from 'styled-components'

const FullLink = styled.a`
  width: 100%;
`
const HorizonLink = styled.a`
  width: 45%;
`
const Button = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 200px;
  border: 1px solid white;
  display: block;
  color: white;
  text-align: center;
  font-size: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`
export const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`

export const Section = styled.section`
  margin: 150px 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const LinkedImage = ({src, horizontal}) => {
  const LinkWrapper = horizontal ? HorizonLink : FullLink
  return (
    <LinkWrapper href={src}>
      <Image src={src} />
    </LinkWrapper>
  )
}

export const BackButton = ({ onClick }) => (
  <Button onClick={onClick}>Back</Button>
)
