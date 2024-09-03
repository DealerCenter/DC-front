import React from 'react'
import styled from 'styled-components'
import OurServices from './components/OurServices'

type Props = {}

const Section4 = (props: Props) => {
  return (
    <Container>
      <OurServices />
    </Container>
  )
}

export default Section4

const Container = styled.div`
  display: flex;
  width: 100%;
`
