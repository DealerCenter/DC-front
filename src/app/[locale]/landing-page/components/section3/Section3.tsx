import React from 'react'
import styled from 'styled-components'
import VehicleStatusCheck from './components/VehicleStatusCheck'
import CheckVehicleHistory from './components/CheckVehicleHistory'
import LogosLineBox from './components/LogosLineBox'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <Container>
      <VehicleStatusCheck />
      <CheckVehicleHistory />
      <LogosLineBox />
    </Container>
  )
}

export default Section3

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
