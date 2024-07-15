import React from 'react'
import styled from 'styled-components'

type Props = {}

const EmptyPlaceHolder = (props: Props) => {
  return <Container></Container>
}

export default EmptyPlaceHolder

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 836px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
`
