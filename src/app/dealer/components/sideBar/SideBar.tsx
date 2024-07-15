import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import BalanceContainer from './components/BalanceContainer'
import InfoBox from './components/InfoBox'
import clockIcon from '@/assets/icons/clock.svg'
import personSettings from '@/assets/icons/personSettings.svg'
import personList from '@/assets/icons/personList.svg'
import bellIcon from '@/assets/icons/bell.svg'
import BarButton from './components/BarButton'
import OrderHistory from '../../order-history/OrderHistory'
import { routeName } from '@/common/helpers/constants'

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
          <BarButton
            active={false}
            text={t('order history')}
            icon={clockIcon}
            width={20}
            height={20}
            href={routeName.orderHistory}
          />
          <BarButton
            active={false}
            text={t('personal information')}
            icon={personSettings}
            width={20}
            height={20}
            href=''
          />
          <BarButton
            active={true}
            text={t('list of recipients')}
            icon={personList}
            width={20}
            height={20}
            href=''
          />
          <BarButton
            active={false}
            text={t('manage notifications')}
            icon={bellIcon}
            width={18}
            height={19.5}
            href=''
          />
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
