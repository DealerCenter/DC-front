import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import theme from '../../theme'
import InfoBox from './components/InfoBox'
import TextInput from '@/common/components/inputElements/TextInput'
import PageHeader from '@/common/components/pageHeader/PageHeader'

import searchIcon from '@/assets/icons/searchIconGray.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = {}

const VehicleStatusCheck = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  return (
    <Container>
      <HeaderBox>
        <PageHeader
          headerText={t('check vehicle status')}
          text={t('enter the vin code and see where your car is, etc')}
          headerColor={theme.colors?.white}
          textColor={theme.colors?.white}
        />
      </HeaderBox>
      <BlackDiv></BlackDiv>
      <TextInput
        type='text'
        placeholder={t('enter vehicle vin code')}
        name='search field'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        icon={<Image src={searchIcon} alt='search icon' />}
        height={isMobile ? 40 : 50}
        width={isMobile ? 343 : 672}
        paddingLeft={isMobile ? 34 : 50}
        iconPaddingLeft={isMobile ? 10 : 16}
        hasShadow={true}
      />
      <InfoBoxesFrame>
        <InfoBox header={t('location')} label={t('registered user')} />
        <InfoBox
          header={t('debt')}
          label={t('car that arrived at the place')}
        />
        <InfoBox
          header={t('photos')}
          label={t('car that arrived at the place')}
        />
      </InfoBoxesFrame>
    </Container>
  )
}

export default VehicleStatusCheck

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 0;

  border-bottom: 6px solid ${({ theme }) => theme.colors?.black};
  width: 100%;
`

const HeaderBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 218px;

  @media ${({ theme }) => theme.media?.md} {
    height: 241px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: 252px;
  }
`

const BlackDiv = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  width: 100%;
  left: 0;
  z-index: -1;
  height: 243px;

  @media ${({ theme }) => theme.media?.md} {
    height: 266px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: 272px;
  }
`

const InfoBoxesFrame = styled.div`
  display: flex;
  flex-direction: row;

  padding: 120px 0 100px 0;

  gap: 10px;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 32px;
    width: 343px;
  }
`
