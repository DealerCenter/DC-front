import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import notificationBell from '@/assets/icons/notificationBell.svg'
import NotificationDot from '../../notificationDot/NotificationDot'

type Props = {
  name: string
  isHovered: boolean
  refreshDate?: string
  notificationCount?: number
  isFlexibleOnDesktop?: boolean
}

const InfoBox = ({
  name,
  isHovered,
  refreshDate,
  notificationCount,
  isFlexibleOnDesktop,
}: Props) => {
  const t = useTranslations('')

  return (
    <>
      <Container
        isHovered={isHovered}
        isFlexibleOnDesktop={isFlexibleOnDesktop}
      >
        <Frame>
          <TextBox>
            <Text
              isHovered={isHovered}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            >
              {t('hello')}, &nbsp;
            </Text>
            <TextName
              isHovered={isHovered}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            >
              {name}
            </TextName>
          </TextBox>
          {refreshDate && (
            <DateText
              isHovered={isHovered}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            >
              {refreshDate}
            </DateText>
          )}
        </Frame>
        {notificationCount && (
          <>
            <IconBox
              isHovered={isHovered}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            >
              <BellBox>
                <Image src={notificationBell} alt='notification bell icon' />
                <NotificationDot number={notificationCount} />
              </BellBox>
            </IconBox>
            <IconBoxOnWide
              isHovered={isHovered}
              isFlexibleOnDesktop={isFlexibleOnDesktop}
            >
              <BellBox>
                <Image src={notificationBell} alt='notification bell icon' />
                <NotificationDot number={notificationCount} />
              </BellBox>
            </IconBoxOnWide>
          </>
        )}
      </Container>
    </>
  )
}

export default InfoBox

type ContainerProps = { isHovered: boolean; isFlexibleOnDesktop?: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 286px;
  height: 135px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 100%;
    height: 115px;
    flex: 1;
  }

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 0.5s ease-in-out;
                  width: 286px;
                `
              : css`
                  transition: all 0.5s ease-in-out;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 0.5s ease-in-out;
                  width: 286px;
                `
              : css`
                  transition: all 0.5s ease-in-out;
                  width: 0;
                `}
          }
        `}
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TextBox = styled.div`
  display: flex;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: row;
  }
  flex-direction: column;
`

const Text = styled.p<ContainerProps>`
  margin: 0;
  font-size: 28px;
  font-weight: 400;

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `}
`
const TextName = styled.span<ContainerProps>`
  font-size: 28px;
  font-weight: 700;

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `}
`

const DateText = styled.p<ContainerProps>`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `}
`
const IconBox = styled.div<ContainerProps>`
  opacity: 0;
  width: 0;

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  width: unset;
                  opacity: 0;
                `
              : css`
                  width: unset;
                  transition-property: opacity;
                  transition-duration: 1s;
                  transition-delay: 0.5s;
                  opacity: 1;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  width: unset;
                  opacity: 0;
                `
              : css`
                  width: unset;
                  transition-property: opacity;
                  transition-duration: 1s;
                  transition-delay: 0.5s;
                  opacity: 1;
                `}
          }
        `}
`

const IconBoxOnWide = styled.div<ContainerProps>`
  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  width: unset;
                  opacity: 0;
                `
              : css`
                  width: unset;
                  transition-property: opacity;
                  transition-duration: 1s;
                  transition-delay: 0.5s;
                  opacity: 1;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  width: unset;
                  opacity: 0;
                `
              : css`
                  width: unset;
                  transition-property: opacity;
                  transition-duration: 1s;
                  transition-delay: 0.5s;
                  opacity: 1;
                `}
          }
        `}
`

const BellBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`
