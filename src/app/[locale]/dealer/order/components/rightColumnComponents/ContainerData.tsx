import React from 'react'
import BoxWithHeader from '../BoxWithHeader'
import styled from 'styled-components'
import Image from 'next/image'

import boxIcon from '@/assets/icons/boxBlack.svg'
import { CONTAINER_GET_RES, ORDER_DATA } from '@/api/apiTypes'

type Props = { containerData: CONTAINER_GET_RES }

const ContainerData = ({ containerData }: Props) => {
  const { name, trackingUrl } = containerData

  return (
    <BoxWithHeader headerText='container data'>
      <Frame>
        <Icon>
          <Image src={boxIcon} alt='icon' width={16} height={16} />
        </Icon>
        <Frame2>
          <Name>{name}</Name>
          <StyledLink>{trackingUrl}</StyledLink>
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
