import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import soldIcon from '@/assets/icons/auctionStateBox/sold.svg'
import notSoldIcon from '@/assets/icons/auctionStateBox/notSold.svg'
import pendingIcon from '@/assets/icons/auctionStateBox/pending.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

const ICON_WIDTH = 16
const ICON_HEIGHT = 16
const ICON_WIDTH_MOBILE = 10
const ICON_HEIGHT_MOBILE = 10

type Props = {
  auctionState: 'sold' | 'not sold' | 'pending'
  shrinkOnSm?: boolean
}

const AuctionStateBox = ({ auctionState, shrinkOnSm }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const icon =
    auctionState === 'pending'
      ? pendingIcon
      : auctionState === 'not sold'
        ? notSoldIcon
        : auctionState === 'sold' && soldIcon

  return (
    <Container auctionState={auctionState} shrinkOnSm={shrinkOnSm}>
      <IconBox>
        <Image
          src={icon}
          alt='icon'
          width={isMobile ? ICON_WIDTH_MOBILE : ICON_WIDTH}
          height={isMobile ? ICON_HEIGHT_MOBILE : ICON_HEIGHT}
        />
      </IconBox>

      {shrinkOnSm && isMobile ? (
        <></>
      ) : (
        <Label auctionState={auctionState}>{t(auctionState)}</Label>
      )}
    </Container>
  )
}

export default AuctionStateBox

type AuctionStateProps = {
  auctionState: 'sold' | 'not sold' | 'pending'
  shrinkOnSm?: boolean
}

const Container = styled.div<AuctionStateProps>`
  box-sizing: border-box;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 14px;

  ${({ auctionState, theme }) =>
    auctionState === 'sold'
      ? css`
          background-color: ${theme.colors?.green};
        `
      : auctionState === 'not sold'
        ? css`
            background-color: ${theme.colors?.main_gray_56};
          `
        : auctionState === 'pending' &&
          css`
            background-color: ${theme.colors?.yellow};
          `}

  @media  ${({ theme }) => theme.media?.sm} {
    height: 32px;
    border-radius: 8px;

    padding: 10px 8px;
    gap: 8px;

    ${({ shrinkOnSm }) =>
      shrinkOnSm
        ? css`
            width: 42px;
          `
        : css`
            width: unset;
          `};
  }
`

const Label = styled.label<AuctionStateProps>`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  ${({ auctionState, theme }) =>
    auctionState === 'sold'
      ? css`
          color: ${theme.colors?.white};
        `
      : css`
          color: ${theme.colors?.black};
        `}

  @media  ${({ theme }) => theme.media?.sm} {
    font-size: 11px;
  }
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ICON_WIDTH};
  height: ${ICON_HEIGHT};

  @media ${({ theme }) => theme.media?.sm} {
    width: ${ICON_WIDTH_MOBILE};
    height: ${ICON_HEIGHT_MOBILE};
  }
`
