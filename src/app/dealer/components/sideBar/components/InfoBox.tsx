import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import notificationBell from '@/assets/icons/notificationBell.svg'
import notificationDot from '@/assets/icons/notificationDot.svg'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

type Props = {
  refreshDate: string
  name: string
  notificationCount: number
  isHovered: boolean
}

const InfoBox = ({
  refreshDate,
  name,
  notificationCount,
  isHovered,
}: Props) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1440px) and (min-width: 500px)',
  })
  const t = useTranslations('')

  return (
    <>
      <Container isHovered={isHovered}>
        <Frame>
          <TextBox>
            <Text isHovered={isHovered}>{t('hello')}, &nbsp;</Text>
            <TextName isHovered={isHovered}>{name}</TextName>
          </TextBox>
          <DateText isHovered={isHovered}>{refreshDate}</DateText>
        </Frame>
        <IconBox>
          <BellBox>
            <Image src={notificationBell} alt='notification bell icon' />
            <DotBox>
              <DotBox1>
                <Image src={notificationDot} alt='notification Dot icon' />
              </DotBox1>
              <DotNumber>{notificationCount}</DotNumber>
            </DotBox>
          </BellBox>
        </IconBox>
      </Container>
    </>
  )
}

export default InfoBox

type ContainerProps = { isHovered: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 286px;
  height: 135px;

  @media (max-width: 500px) {
    width: 100%;
    height: 115px;
    flex: 1;
  }

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
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

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TextBox = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: row;
  }
  flex-direction: column;
`

const Text = styled.p<ContainerProps>`
  margin: 0;
  font-size: 28px;
  font-weight: 400;

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: all 300ms ease-in-out 500ms;
            opacity: 1;
            width: unset;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`
const TextName = styled.span<ContainerProps>`
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: all 300ms ease-in-out 500ms;
            opacity: 1;
            width: unset;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`

const DateText = styled.p<ContainerProps>`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.56);

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: all 300ms ease-in-out 500ms;
            opacity: 1;
            width: unset;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`
const IconBox = styled.div``

const BellBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`
const DotBox = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;

  display: grid;
  place-items: center;
`
const DotBox1 = styled.div`
  display: flex;
`

const DotNumber = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  color: white;
`
