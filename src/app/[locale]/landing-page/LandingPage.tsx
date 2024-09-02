import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import styled from 'styled-components'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <Container>
      <Section1 />
      <Section2 />
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
