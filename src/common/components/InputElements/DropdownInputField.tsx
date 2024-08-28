import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import arrowDown from '@/assets/icons/arrowDown.svg'

type Props = { placeholder: string }

const DropdownInputField = ({ placeholder }: Props) => {
  return (
    <Container>
      <Label>{placeholder}</Label>
      <Icon>
        <Image src={arrowDown} alt='arrow down icon' />
      </Icon>
    </Container>
  )
}

export default DropdownInputField

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 275px;
  height: 56px;

  @media ${({ theme }) => theme.media?.md} {
    width: 215px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    height: 48px;
  }

  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding-left: ${({ theme }) => theme.spacing?.md};
  padding-right: ${({ theme }) => theme.spacing?.md};
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
