import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = { label: string; icon: string; value: string }

const LabelIconValueBox = ({ label, icon, value }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Icon>
        <Image src={icon} alt='icon' />
      </Icon>
      <Value>{value}</Value>
    </Container>
  )
}

export default LabelIconValueBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.xsm};
  align-items: center;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  width: 220px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    width: 140px;
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }

  cursor: default;
`

const Value = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }

  cursor: default;
`
