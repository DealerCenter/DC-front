import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import ShippingStateBox from '../../order-history/components/ShippingStateBox'
import { dummyShippingSteps2 } from '@/assets/DummyData'
import Image from 'next/image'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import editIcon from '@/assets/icons/editPencil.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import addPersonIcon from '@/assets/icons/addPersonBlack.svg'
import BasicButton from '@/common/components/appButton/BasicButton'

const dummyUserData = [{ name: 'Luka Tsilosani', mobile: '+995 123 456 789' }]
// const dummyUserData = []

type Props = {}

const RightFrame = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Box>
        <Header>{t('status')}</Header>
        <Line />
        <ShippingStateBox shippingSteps={dummyShippingSteps2} currentStep={1} />
      </Box>
      <Box>
        <Header>{t('container data')}</Header> <Line />
        <Frame>
          <Icon>
            <Image src={boxIcon} alt='icon' width={16} height={16} />
          </Icon>
          <Frame2>
            <Name>Maerski something</Name>
            <StyledLink>maerski.com/your tracking code</StyledLink>
          </Frame2>
        </Frame>
      </Box>
      <Box>
        <Header>{t('data of the recipient')}</Header>
        <Line />
        {dummyUserData.length !== 0 ? (
          <DataFrame>
            <Name>{dummyUserData[0].name}</Name>
            <Value>{dummyUserData[0].mobile}</Value>
            <IconBox>
              <Icon>
                <Image src={checkedGreen} alt='checked icon' />
              </Icon>
              <Icon>
                <Image src={editIcon} alt='pencil icon' />
              </Icon>
            </IconBox>
          </DataFrame>
        ) : (
          <AddPersonFrame>
            <Image src={addPersonIcon} alt='add person icon' />
            <Value>{t('not added recipient data')}</Value>
            <BasicButton onClick={() => {}}>{t('add recipient')}</BasicButton>
          </AddPersonFrame>
        )}
      </Box>
      <Box>
        <Header>{t('dealer data')}</Header> <Line />
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
      </Box>
    </Container>
  )
}

export default RightFrame

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
    /* min-width: 343px; */
  }

  border: 1px solid blue;
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

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
const StyledLink = styled.a`
  width: 112px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`

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

const AddPersonFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
