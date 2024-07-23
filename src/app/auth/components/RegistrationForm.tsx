import React from 'react'
import styled from 'styled-components'
import { RegisterFormProviderLegalPerson } from '../hooks/useRegistrationFormLegalPerson'
import { RegisterFormProviderIndividual } from '../hooks/useRegistrationFormIndividual'

type Props = { children: JSX.Element }

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
  background-color: ${({ theme }) => theme.colors?.background};
  margin: auto;
  width: 374px;
  min-height: 617px;
  border-radius: 28px;
  padding: 42px 12px 42px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 2rem;

  @media ${({ theme }) => theme.media?.lg} {
    width: 65%;
    max-width: 560px;
    padding: 42px 120px 42px 120px;
  }
`
