import React from 'react'
import styled from 'styled-components'
import VehicleStatusCheck from './components/VehicleStatusCheck'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <Container>
      <VehicleStatusCheck />
    </Container>
  )
}

export default Section3

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
