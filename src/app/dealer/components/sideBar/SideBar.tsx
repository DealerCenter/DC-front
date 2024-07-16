import { useTranslations } from 'next-intl'
import React from 'react'
import styled, { css } from 'styled-components'
import BalanceContainer from './components/GrayContainer'
import InfoBox from './components/InfoBox'
import BarButton from './components/BarButton'
import OrderHistory from '../../order-history/OrderHistory'
import { routeName } from '@/common/helpers/constants'
import { usePathname } from 'next/navigation'

import clockBlack from '@/assets/icons/clock/clock-black.svg'
import clockWhite from '@/assets/icons/clock/clock-white.svg'
import personSettingsBlack from '@/assets/icons/personSettings/personSettings-black.svg'
import personSettingsWhite from '@/assets/icons/personSettings/personSettings-white.svg'
import personListBlack from '@/assets/icons/personList/personList-black.svg'
import personListWhite from '@/assets/icons/personList/personList-white.svg'
import bellIconBlack from '@/assets/icons/bell/bell-black.svg'
import bellIconWhite from '@/assets/icons/bell/bell-white.svg'
import wallet from '@/assets/icons/wallet.svg'
import exitIcon from '@/assets/icons/exit.svg'
import GrayContainer from './components/GrayContainer'
import { useMediaQuery } from 'react-responsive'

type Props = {}

const SideBar = (props: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const t = useTranslations('')
  const pathname = usePathname()

  return (
    <BarContainer isMobile={isMobile}>
      <Frame>
        <InfoBox
          name='Givi'
          refreshDate='last refresh jul 11 2034'
          notificationCount={9}
        />
        <GrayContainer
          icon={wallet}
          text={t('balance')}
          balance={'$ 9873.32'}
        />
        <ButtonFrame isMobile={isMobile}>
          <BarButton
            active={pathname === routeName.orderHistory}
            text={t('order history')}
            icon={pathname === routeName.orderHistory ? clockWhite : clockBlack}
            width={20}
            height={20}
            href={routeName.orderHistory}
          />
          <BarButton
            active={pathname === routeName.PersonalInformation}
            text={t('personal information')}
            icon={
              pathname === routeName.PersonalInformation
                ? personSettingsWhite
                : personSettingsBlack
            }
            width={20}
            height={20}
            href={routeName.PersonalInformation}
          />
          <BarButton
            active={pathname === routeName.usersList}
            text={t('list of recipients')}
            icon={
              pathname === routeName.usersList
                ? personListWhite
                : personListBlack
            }
            width={20}
            height={20}
            href={routeName.usersList}
          />
          <BarButton
            active={pathname === routeName.manageNotifications}
            text={t('manage notifications')}
            icon={
              pathname === routeName.manageNotifications
                ? bellIconWhite
                : bellIconBlack
            }
            width={20}
            height={20}
            href={routeName.manageNotifications}
          />
        </ButtonFrame>
      </Frame>
      {!isMobile && (
        <GrayContainer icon={exitIcon} text={t('exit')} height='71px' />
      )}
    </BarContainer>
  )
}

export default SideBar

type BarProps = { isMobile: boolean }

const BarContainer = styled.div<BarProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 16px;

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 358px;
          padding: 16px;
          border: 1px solid rgba(32, 32, 32, 0.1);
          gap: 32px;
        `
      : css`
          width: 334px;
          padding: 24px;
          height: 902px;
          gap: 60px;
        `}
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

type ButtonFrameProps = { isMobile: boolean }

const ButtonFrame = styled.div<ButtonFrameProps>`
  box-sizing: border-box;
  display: flex;
  /* flex-direction: column; */
  /* gap: 4px; */

  ${({ isMobile }) =>
    isMobile
      ? css`
          flex-direction: row;
          justify-content: space-between;
          width: 358px;

          padding: 0px 16px;
        `
      : css`
          flex-direction: column;
        `}
`
