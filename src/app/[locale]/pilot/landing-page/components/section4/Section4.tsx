import React from 'react'
import styled from 'styled-components'
import OurServices from './components/OurServices'
import SuccessStory from './components/SuccessStory'
import WhatCostumersAreSaying from './components/WhatCostumersAreSaying'

type Props = {}

const Section4 = (props: Props) => {
  return (
    <Container>
      <OurServices />
      <SuccessStory />
      {/* <WhatCostumersAreSaying onSeeAllClick={() => {}} /> */}
    </Container>
  )
}

export default Section4

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
