import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import closeXIcon from '@/assets/icons/closeX.svg'
import theme from '../../theme'

type Props = { label: string; onCancel: (arg: string) => void }

const SelectedFilterItem = ({ label, onCancel }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <IconBox onClick={() => onCancel(label)}>
        <Image src={closeXIcon} alt='close icon' />
      </IconBox>
    </Container>
  )
}

export default SelectedFilterItem

const Container = styled.div`
  box-sizing: border-box;

  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius?.lg};

  background-color: ${({ theme }) => theme.colors?.main_gray_10};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 5px;

  @media ${theme.media?.notSm} {
    &:hover {
      background-color: ${({ theme }) => theme.colors?.main_gray_10};
    }
    &:active {
      background-color: unset;
    }
    cursor: pointer;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
