import React from 'react'
import DetailsFrame from './DetailsFrame'
import LoginForm from './LoginForm'
import styled from 'styled-components'

type Props = {}

const ServicesInOneSpace = (props: Props) => {
  return (
    <Container>
      <DetailsFrame />
      <LoginForm goToRegistration={() => {}} />
    </Container>
  )
}

export default ServicesInOneSpace

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;

  width: 100%;
  padding: 120px 0;

  gap: 72px;

  background-color: ${({ theme }) => theme.colors?.footer_black};
`
