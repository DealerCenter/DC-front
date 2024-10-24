import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import Link from 'next/link'

type Props = {
  isArrived: boolean
  buyerFullName: string
  buyerPhoneNumber: string
}

const UserInfoBox = ({ isArrived, buyerFullName, buyerPhoneNumber }: Props) => {
  return (
    <Container isArrived={isArrived}>
      <Frame>
        <IconBox>
          <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
        </IconBox>
        <Box>
          <TextBold>{buyerFullName}</TextBold>
          <Text>{buyerPhoneNumber}</Text>
        </Box>
      </Frame>
      <Frame>
        <IconBox>
          <Image src={boxIcon} alt='icon' width={16} height={16} />
        </IconBox>
        <Box>
          <TextBold>Maerski something</TextBold>
          <StyledLink>maerski.com/your tracking code</StyledLink>
        </Box>
      </Frame>
    </Container>
  )
}

export default UserInfoBox

type ContainerProps = { isArrived: boolean }

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  height: 150px;
  visibility: ${({ isArrived }) => (isArrived ? 'unset' : 'hidden')};
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`

const TextBold = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`

const Text = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.black};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const StyledLink = styled.a`
  width: 112px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`
