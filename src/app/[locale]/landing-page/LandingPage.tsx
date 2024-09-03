import React from 'react'
import styled from 'styled-components'

import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
