import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled from 'styled-components'
import ShippingStateBox from '../../../order-history/components/ShippingStateBox'
import { dummyShippingSteps2 } from '@/assets/DummyData'
import Image from 'next/image'

import boxIcon from '@/assets/icons/boxBlack.svg'
import TextInput from '@/common/components/inputElements/TextInput'
import UserDataBox from './components/UserDataBox'
import Box from '../../../components/common/Box'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

const dummyUserData = [
  { name: 'Luka Tsilosani', mobile: '+995 123 456 789' },
  { name: 'Ani Kviciani', mobile: '+995 342 433 777' },
]

type Props = { isEditing: boolean }

const RightFrame = ({ isEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  const textInputWidth = isMobile ? 311 : isTablet ? 356 : 391

  return (
    <Container>
      <Box>
        <Header>{t('status')}</Header>
        <Line />
        <ShippingStateBox
          shippingSteps={dummyShippingSteps2}
          currentStep={1}
          isEditing={isEditing}
        />
      </Box>
      <Box>
        <Header>{t('container data')}</Header> <Line />
        <Frame>
          <Frame2>
            {isEditing ? (
              <TextInput
                width={textInputWidth}
                height={48}
                type='text'
                name='provide a link'
                placeholder={t('provide a link')}
                value={''}
                onChange={() => {}}
                onBlur={() => {}}
                fontWeight='bold'
                fontSize={13}
                isOutline={false}
              />
            ) : (
              <>
                <Icon>
                  <Image src={boxIcon} alt='icon' width={16} height={16} />
                </Icon>
                <Name>Maerski something</Name>
                <StyledLink>maerski.com/your tracking code</StyledLink>
              </>
            )}
          </Frame2>
        </Frame>
      </Box>
      <UserDataBox
        header='recipient data'
        fullName={''}
        value={dummyUserData[0].mobile}
      />
      <UserDataBox
        header='recipient data'
        fullName={dummyUserData[1].name}
        value={dummyUserData[1].mobile}
      />
    </Container>
  )
}

export default RightFrame

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
    width: 343px;
  }
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
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
