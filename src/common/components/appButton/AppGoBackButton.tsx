import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import leftArrow from '@/assets/icons/arrows/arrowLeftThinBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'

type Props = { onClick: () => void; text: string; noTextOnMobile?: boolean }

const AppGoBackButton = ({ onClick, text, noTextOnMobile = false }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <BackToOrderButton onClick={onClick}>
      <Image src={leftArrow} alt='left arrow icon' height={20} />
      {!(noTextOnMobile && isMobile) && (
        <BackToOrderLabel>{text}</BackToOrderLabel>
      )}
    </BackToOrderButton>
  )
}

export default AppGoBackButton

const BackToOrderButton = styled.button`
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 40px;

  background-color: unset;
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      background-color: ${({ theme }) => theme.colors?.main_gray_04};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors?.main_gray_10};
    }
  }

  cursor: pointer;
`

const BackToOrderLabel = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
