import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import Link from 'next/link'
import { ORDER_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import { Popover } from 'antd'
import CopyButton from '@/common/components/copyToClipboard/CopyButton'

type Props = {
  orderData: ORDER_DATA
}

const UserInfoBox = ({ orderData }: Props) => {
  const { receiver, container } = orderData

  return (
    <Container>
      {receiver && (
        <Frame>
          <IconBox>
            <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
          </IconBox>
          <Box>
            <TextBold>{`${receiver.firstName} ${receiver.lastName}`}</TextBold>
            <Text>{receiver.phoneNumber}</Text>
          </Box>
        </Frame>
      )}
      {container && (
        <Frame>
          <IconBox>
            <Image src={boxIcon} alt='icon' width={16} height={16} />
          </IconBox>
          <Box>
            <TextBold>{container.name}</TextBold>
            <Popover
              content={
                <PopoverText>
                  <CopyButton textToCopy={container.trackingUrl} />
                  <span>{container.trackingUrl}</span>
                </PopoverText>
              }
              title='Copy URL'
              trigger='hover'
            >
              <StyledLink>{container.trackingUrl}</StyledLink>
            </Popover>
          </Box>
        </Frame>
      )}
    </Container>
  )
}

export default UserInfoBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  height: 150px;
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

const PopoverText = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
  display: flex;
  align-items: center;
`

const StyledLink = styled.a`
  max-width: 112px;
  font-size: 13px;

  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};

  //For Ellipsis
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  position: relative;
  line-height: 1.5;
  max-height: 3em;

  &:after {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    background: white;
    padding-left: 5px;
  }
`
