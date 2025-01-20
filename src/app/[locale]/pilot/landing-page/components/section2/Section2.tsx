import React from 'react'
import styled from 'styled-components'
import TransportationCalculator from '@/app/[locale]/pilot/our-services/transportation-calculator/TransportationCalculator'
import DocumentCheck from '@/app/[locale]/pilot/our-services/document-check/DocumentCheck'

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
