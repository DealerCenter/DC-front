import React from 'react'
import styled from 'styled-components'

import Section1 from './components/Section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
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
