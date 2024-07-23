import React from 'react'
import styled from 'styled-components'

type Props = {}

const DealerComponentEmpty = (props: Props) => {
  return <Container></Container>
}

export default DealerComponentEmpty

const Container = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing?.lg};
  width: 836px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
`
