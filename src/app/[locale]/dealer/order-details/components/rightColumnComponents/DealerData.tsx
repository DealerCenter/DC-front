import React from 'react'
import BoxWithHeader from '../BoxWithHeader'
import styled from 'styled-components'
import Image from 'next/image'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import editIcon from '@/assets/icons/editPencil.svg'

type Props = {}

const DealerData = (props: Props) => {
  return (
    <BoxWithHeader headerText='dealer data'>
      <DataFrame>
        <Name>Luka Tsilosani</Name>
        <Value>98237 293847 298</Value>
        <IconBox>
          <Icon>
            <Image src={checkedGreen} alt='checked icon' />
          </Icon>
          <Icon>
            <Image src={editIcon} alt='pencil icon' />
          </Icon>
        </IconBox>
      </DataFrame>
    </BoxWithHeader>
  )
}

export default DealerData

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Value = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`
