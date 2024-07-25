import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import checkedGreen from '@/assets/icons/shippingStateIcons/checkedGreen.svg'
import lineGreen from '@/assets/icons/shippingStateIcons/lineGreen.svg'
import lineGray from '@/assets/icons/shippingStateIcons/lineGray.svg'
import CircleGreenEmptySmall from '@/assets/icons/shippingStateIcons/CircleGreenEmptySmall.svg'
import CircleGreenEmpty from '@/assets/icons/shippingStateIcons/CircleGreenEmpty.svg'
import circleSmallGray from '@/assets/icons/shippingStateIcons/circleSmallGray.svg'

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
    <Icon1>
      <Image src={CircleGreenEmpty} alt='icon' height={16} />
      <Icon2>
        <Image src={CircleGreenEmptySmall} alt='icon' height={6} />
      </Icon2>
    </Icon1>
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
const Icon1 = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Icon2 = styled.div`
  display: flex;
  position: absolute;
`
