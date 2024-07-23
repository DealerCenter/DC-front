import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'

type Props = { isArrived: boolean }

const UserInfoBox = ({ isArrived }: Props) => {
  return (
    <Container>
      <Frame>
        <IconBox>
          <Image src={checkmarkGreen} alt='icon' />
        </IconBox>
        <Box>
          <TextBold>ლუკა წილოსანი</TextBold>
          <Text>+995 555 555 555</Text>
        </Box>
      </Frame>
      <Frame>
        <IconBox>
          <Image src={boxIcon} alt='icon' />
        </IconBox>
        <Box>
          <TextBold>Maerski something</TextBold>
          <Text>+995 555 555 555</Text>
        </Box>
      </Frame>
    </Container>
  )
}

export default UserInfoBox

const Container = styled.div`
  height: 150px;

  border: 1px solid red;
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TextBold = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text};
`

const Text = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.text};
`

const Link = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
