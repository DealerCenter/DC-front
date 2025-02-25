import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { usePathname, useRouter } from '@/navigation'
import { message } from 'antd'

import { useUserData } from '@/common/store/userDataStore'
import { logoutUser } from '@/api/apiCalls'
import theme from '@/app/[locale]/theme'
import { routeName } from '@/common/helpers/constants'

import InfoBox from './components/InfoBox'
import BarButton from './components/BarButton'
import GrayContainer from './components/GrayContainer'

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
import LoadingOverlay from '../loader/LoadingOverlay'

type Props = {
  routes: {
    orderHistory: string
    personalInformation: string
    usersList: string
    manageNotifications: string
  }
  isFlexibleOnDesktop?: boolean
}

const SideBar = ({ routes, isFlexibleOnDesktop }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const pathname = usePathname()
  const { userData } = useUserData()
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
    setIsLoggingOut(true)
    const response = await logoutUser()
    if (response) {
      message.success(t('you are logged out'))
      router.push(routeName.landing)
    }
    if (!response) {
      setIsLoggingOut(false)
      message.error(t('you could not log out'))
    }
  }

  return (
    <>
      <LoadingOverlay isLoading={isLoggingOut} />
      <BarContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isFlexibleOnDesktop={false}
      >
        <Frame isFlexibleOnDesktop={isFlexibleOnDesktop}>
          <InfoBox
            isHovered={isHovered}
            name={userData ? userData?.firstName : ''}
            isFlexibleOnDesktop={isFlexibleOnDesktop}
            // refreshDate='last refresh jul 11 2034'
            // notificationCount={9}
          />
          <GrayContainer
            icon={wallet}
            text={t('balance')}
            balance={'$ NA'}
            isHovered={isHovered}
            isFlexibleOnDesktop={isFlexibleOnDesktop}
          />
          <ButtonFrame>
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.orderHistory}
              text={t('order history')}
              icon={pathname === routes.orderHistory ? clockWhite : clockBlack}
              width={20}
              height={20}
              href={routes.orderHistory}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.personalInformation}
              text={t('personal information')}
              icon={
                pathname === routes.personalInformation
                  ? personSettingsWhite
                  : personSettingsBlack
              }
              width={20}
              height={20}
              href={routes.personalInformation}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.usersList}
              text={t('list of recipients')}
              icon={
                pathname === routes.usersList
                  ? personListWhite
                  : personListBlack
              }
              width={20}
              height={20}
              href={routes.usersList}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            />
            <BarButton
              isHovered={isHovered}
              active={pathname === routes.manageNotifications}
              text={t('manage notifications')}
              icon={
                pathname === routes.manageNotifications
                  ? bellIconWhite
                  : bellIconBlack
              }
              width={20}
              height={20}
              href={routes.manageNotifications}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
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
            isCursorPointer={true}
            disabled={isLoggingOut}
            isFlexibleOnDesktop={isFlexibleOnDesktop}
          />
        )}
      </BarContainer>
      <EmptyContainer isFlexibleOnDesktop={false}></EmptyContainer>
    </>
  )
}

export default SideBar

type EmptyContainerProps = { isFlexibleOnDesktop?: boolean }

const EmptyContainer = styled.div<EmptyContainerProps>`
  display: none;

  ${({ isFlexibleOnDesktop }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            width: 112px;
            height: 902px;
            display: unset;
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            width: 112px;
            height: 902px;
            display: unset;
          }
        `}
`

type BarContainerProps = { isFlexibleOnDesktop?: boolean }

const BarContainer = styled.div<BarContainerProps>`
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

  ${({ isFlexibleOnDesktop }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            transition: all 0.5s ease-in-out;
            position: absolute;
            width: 112px;
            align-items: flex-start;

            &:hover {
              width: 334px;
              box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.15);
            }
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            transition: all 0.5s ease-in-out;
            position: absolute;
            width: 112px;
            align-items: flex-start;

            &:hover {
              width: 334px;
              box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.15);
            }
          }
        `}

  min-width: unset;
  border: unset;
  padding: ${({ theme }) => theme.spacing?.lg};
  height: 902px;
`

type FrameProps = { isFlexibleOnDesktop?: boolean }

const Frame = styled.div<FrameProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    width: 100%;
  }
  width: unset;

  ${({ isFlexibleOnDesktop }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            align-items: flex-start;
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            align-items: flex-start;
          }
        `}
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
