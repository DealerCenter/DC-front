import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../common/PageHeader'
import { useTranslations } from 'next-intl'
import InfoBox from './InfoBox'

import magicIcon from '@/assets/icons/infoBoxPastelIcons/blueMagicIcon.svg'
import ufoIcon from '@/assets/icons/infoBoxPastelIcons/greenShipIcon.svg'
import partyIcon from '@/assets/icons/infoBoxPastelIcons/yellowPartyIcon.svg'

type Props = {}

const dummyText =
  'რაღაც ტექსტი როგორ შეიძლება გვერდში დაუდგე ადამიანს მანქანის შეძენისას და რაღაც რაღაც, ასე შემდეგ'

const OurServices = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <BlackDiv />
      <HeaderBox>
        <PageHeader
          headerText={t('our services')}
          text={t('ourservices')}
          headerColor='white'
          textColor='white'
        />
        <InfoBoxesFrame>
          <InfoBox
            headerText={t('help with auction')}
            text={t('auctionhelp')}
            icon={magicIcon}
          />
          <InfoBox
            headerText={t('vehicle inspection')}
            text={t('vehicleinspection')}
            icon={ufoIcon}
          />
          <InfoBox
            headerText={t('reliable import')}
            text={t('trustworthy')}
            icon={partyIcon}
          />
        </InfoBoxesFrame>
      </HeaderBox>
    </Container>
  )
}

export default OurServices

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 120px 0;
  width: 100%;
`

const HeaderBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 70px;
  gap: 72px;
`

const InfoBoxesFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
    gap: 16px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
    gap: 16px;
    flex-direction: column;
  }
`

const BlackDiv = styled.div`
  background-color: ${({ theme }) => theme.colors?.footer_black};
  width: 100%;
  height: 310px;
  position: absolute;
  z-index: -1;

  @media ${({ theme }) => theme.media?.sm} {
    height: 375px;
  }
`
