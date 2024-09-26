import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import soldIcon from '@/assets/icons/auctionStateBox/sold.svg'
import notSoldIcon from '@/assets/icons/auctionStateBox/notSold.svg'
import pendingIcon from '@/assets/icons/auctionStateBox/pending.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

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
        <Image src={icon} alt='icon' />
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
  padding: 8px;

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
    ${({ shrinkOnSm }) =>
      shrinkOnSm
        ? css`
            width: 42px;
          `
        : css`
            width: unset;
          `}
  }
`

const Label = styled.label<AuctionStateProps>`
  font-size: 13px;
  font-weight: 700;
  padding: 8px;

  ${({ auctionState, theme }) =>
    auctionState === 'sold'
      ? css`
          color: ${theme.colors?.white};
        `
      : css`
          color: ${theme.colors?.black};
        `}
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
