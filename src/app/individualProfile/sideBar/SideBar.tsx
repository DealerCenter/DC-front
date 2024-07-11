import BarButton from '@/common/components/appButton/BarButton'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import BalanceContainer from './BalanceContainer'
import InfoBox from './InfoBox'

type Props = {}

const SideBar = (props: Props) => {
  const t = useTranslations('')

  return (
    <BarContainer>
      <InfoBox
        name='Givi'
        refreshDate='last refresh jul 11 2034'
        notificationCount={9}
      />
      <Frame>
        <BalanceContainer text={t('balance')} balance={'$ 9873.32'} />
        <ButtonFrame>
          <BarButton active={false} text={t('something')} />
          <BarButton active={false} text={t('something')} />
          <BarButton active={true} text={t('something')} />
          <BarButton active={false} text={t('something')} />
        </ButtonFrame>
      </Frame>
    </BarContainer>
  )
}

export default SideBar

const BarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 334px;
  height: 902px;
  border-radius: 16px;
  margin-left: 7.5rem;
  padding: 24px;
  gap: 60px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
