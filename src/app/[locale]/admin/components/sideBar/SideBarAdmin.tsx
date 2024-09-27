import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { usePathname, useRouter } from '@/navigation'

import theme from '@/app/[locale]/theme'
import { routeName } from '@/common/helpers/constants'

import AddOrderButton from './components/AddOrderButton'
import GrayContainer from './components/GrayContainer'
import InfoBox from '@/common/components/sideBar/components/InfoBox'
import BarButton from '@/common/components/sideBar/components/BarButton'

import clockBlack from '@/assets/icons/clock/clock-black.svg'
import clockWhite from '@/assets/icons/clock/clock-white.svg'
import personSettingsBlack from '@/assets/icons/personSettings/personSettings-black.svg'
import personSettingsWhite from '@/assets/icons/personSettings/personSettings-white.svg'
import exitIcon from '@/assets/icons/exit.svg'
import containersBurgerBlack from '@/assets/icons/containersBurgerBlack.svg'
import containersBurgerWhite from '@/assets/icons/containersBurgerWhite.svg'
import settingsGearBlack from '@/assets/icons/settingsGearBlack.svg'
import settingsGearWhite from '@/assets/icons/settingsGearWhite.svg'
import plusIcon from '@/assets/icons/plusInCircle24.svg'
import { logoutUser } from '@/api/apiCalls'
import { message } from 'antd'

const isAdmin = true

type Props = {
  routes: {
    orders: string
    dealers: string
    containers: string
    settings: string
  }
}

const SideBarAdmin = ({ routes }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const pathname = usePathname()
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await logoutUser(isAdmin)
      message.success(t('you are logged out'))
      router.push(routeName.landing)
    } catch (error) {
      setIsLoggingOut(false)
      message.error(t('you could not log out'))
    }
  }

  return (
    <>
      <BarContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Frame>
          <InfoBox
            isHovered={isHovered}
            name='Name'
            refreshDate='last refresh jul 11 2034'
            notificationCount={9}
          />
          <AddOrderButton
            text={t('add order')}
            icon={plusIcon}
            isHovered={isHovered}
            height={56}
            onClick={() => router.push(routeName.adminCreateOrder)}
          />
          <ButtonFrame>
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.orders}
              text={t('orders')}
              icon={pathname === routes.orders ? clockWhite : clockBlack}
              width={20}
              height={20}
              href={routes.orders}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.dealers}
              text={t('dealers')}
              icon={
                pathname === routes.dealers
                  ? personSettingsWhite
                  : personSettingsBlack
              }
              width={20}
              height={20}
              href={routes.dealers}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.containers}
              text={t('containers')}
              icon={
                pathname === routes.containers
                  ? containersBurgerWhite
                  : containersBurgerBlack
              }
              width={20}
              height={20}
              href={routes.containers}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.settings}
              text={t('settings')}
              icon={
                pathname === routes.settings
                  ? settingsGearWhite
                  : settingsGearBlack
              }
              width={20}
              height={20}
              href={routes.settings}
            />
          </ButtonFrame>
        </Frame>
        {!isMobile && (
          <GrayContainer
            icon={exitIcon}
            text={isLoggingOut ? `${t('wait')}...` : t('exit')}
            height='71px'
            isHovered={isHovered}
            onClick={handleLogout}
            disabled={isLoggingOut}
          />
        )}
      </BarContainer>
      <EmptyContainer></EmptyContainer>
    </>
  )
}

export default SideBarAdmin

const EmptyContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.media?.md} {
    width: 112px;
    height: 902px;
    display: unset;
  }
`

const BarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 32px;
  flex: unset;
  transition: unset;
  position: unset;
  width: 334px;
  z-index: 10;

  @media ${({ theme }) => theme.media?.sm} {
    min-width: 300px;
    width: 100%;
    flex: 1;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
  }

  @media ${({ theme }) => theme.media?.md} {
    transition: all 0.5s ease-in-out;
    position: absolute;
    width: 112px;
    align-items: flex-start;

    &:hover {
      width: 334px;
      box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.15);
    }
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  }

  min-width: unset;
  border: unset;
  padding: ${({ theme }) => theme.spacing?.lg};
  height: 902px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    width: 100%;
  }
  width: unset;

  @media ${({ theme }) => theme.media?.md} {
    align-items: flex-start;
  }
`

const ButtonFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 100%;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }

  flex-direction: column;
  justify-content: unset;
  gap: 4px;
`
