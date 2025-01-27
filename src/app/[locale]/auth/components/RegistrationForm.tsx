import React from 'react'
import styled from 'styled-components'
import { RegisterFormProviderLegalPerson } from '../hooks/useRegistrationFormLegalPerson'
import { RegisterFormProviderIndividual } from '../hooks/useRegistrationFormIndividual'

type Props = { children: any }

const RegistrationForm = ({ children }: Props) => {
  return (
    <RegisterFormProviderIndividual>
      <RegisterFormProviderLegalPerson>
        <Container>{children}</Container>
      </RegisterFormProviderLegalPerson>
    </RegisterFormProviderIndividual>
  )
}

export default RegistrationForm

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.background};
  margin: auto;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 63px;

  max-width: 682px;
  padding: 42px 120px 42px 120px;

  @media ${({ theme }) => theme.media?.sm} {
    min-width: 375px;
    width: 90%;
    padding: 42px 12px 42px 12px;
  }
`
