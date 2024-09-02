import React from 'react'
import styled from 'styled-components'
import DocumentCheck from './components/topFrame/DocumentCheck'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <Container>
      <DocumentCheck />
    </Container>
  )
}

export default Section2

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
