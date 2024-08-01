import React from 'react'
import BoxWithHeader from '../BoxWithHeader'
import styled from 'styled-components'
import Image from 'next/image'

import boxIcon from '@/assets/icons/boxBlack.svg'

type Props = {}

const ContainerData = (props: Props) => {
  return (
    <BoxWithHeader headerText='container data'>
      <Frame>
        <Icon>
          <Image src={boxIcon} alt='icon' width={16} height={16} />
        </Icon>
        <Frame2>
          <Name>Maerski something</Name>
          <StyledLink>maerski.com/your tracking code</StyledLink>
        </Frame2>
      </Frame>
    </BoxWithHeader>
  )
}

export default ContainerData

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  white-space: nowrap;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const StyledLink = styled.a`
  width: 112px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`
