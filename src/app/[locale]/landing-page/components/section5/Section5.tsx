import React from 'react'
import styled from 'styled-components'
import ServicesInOneSpace from './components/ServicesInOneSpace'
import EarthDots from './components/EarthDots'

type Props = {}

const Section5 = (props: Props) => {
  return (
    <Container>
      <ServicesInOneSpace />
      <EarthDots />
    </Container>
  )
}

export default Section5

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
