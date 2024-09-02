import React from 'react'
import styled from 'styled-components'
import DocumentCheck from './components/documentCheck/DocumentCheck'
import TransportationCalculator from './components/transportationCalculator/TransportationCalculator'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <Container>
      <DocumentCheck />
      <TransportationCalculator />
    </Container>
  )
}

export default Section2

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
