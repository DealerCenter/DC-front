import React from 'react'
import styled from 'styled-components'

type Props = { children: JSX.Element }

const RegistrationForm = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default RegistrationForm

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.colors?.background}; */
  background-color: #2020200a;
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

  @media (${({ theme }) => theme.media?.desktop}) {
    width: 65%;
    max-width: 560px;
    padding: 42px 120px 42px 120px;
  }
`
