import React from 'react'
import styled from 'styled-components'

type Props = { header: string; label: string }

const InfoLabels = ({ header, label }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Label>{label}</Label>
    </Container>
  )
}

export default InfoLabels

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 8px solid ${({ theme }) => theme.colors?.link_blue};
  padding-left: 20px;

  width: 570px;

  gap: 4px;

  @media ${({ theme }) => theme.media?.md} {
    width: 465px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`

const Header = styled.label`
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.onboarding_background_grey};

  display: flex;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.onboarding_background_grey};
`
