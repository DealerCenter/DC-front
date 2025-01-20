import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import checkedGreen from '@/assets/icons/shippingStateIcons/checkedGreen.svg'
import lineGreen from '@/assets/icons/shippingStateIcons/lineGreen.svg'
import lineGray from '@/assets/icons/shippingStateIcons/lineGray.svg'
import circleSmallGray from '@/assets/icons/shippingStateIcons/circleSmallGray.svg'
import pendingGreen from '@/assets/icons/shippingStateIcons/pendingGreen.svg'

type Props = {}

export const DoneIcon = (props: Props) => {
  return (
    <Icon>
      <Image src={checkedGreen} alt='icon' height={16} />
    </Icon>
  )
}
export const CurrentIcon = (props: Props) => {
  return (
    <Icon>
      <Image src={pendingGreen} alt='icon' height={16} />
    </Icon>
  )
}
export const PendingIcon = (props: Props) => {
  return (
    <Icon>
      <Image src={circleSmallGray} alt='icon' height={6} />
    </Icon>
  )
}
export const LineGray = (props: Props) => {
  return (
    <Icon>
      <Image src={lineGray} alt='icon' height={16} />
    </Icon>
  )
}
export const LineGreen = (props: Props) => {
  return (
    <Icon>
      <Image src={lineGreen} alt='icon' height={16} />
    </Icon>
  )
}

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
