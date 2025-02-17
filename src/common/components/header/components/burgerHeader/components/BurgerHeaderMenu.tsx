import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import MiddleBox from './MiddleBox'
import LoginButton from '../../LoginButton'
import LangChangeButton from '../../fullHeader/components/LangChangeButton'

import closeX from '@/assets/icons/closeXWhite.svg'
import search from '@/assets/icons/search.svg'
import SearchButton from './SearchButton'
import SearchButtonDynamic from '../../fullHeader/components/SearchButtonDynamic'

type Props = {
  isOpen: boolean
  handleClose: () => void
  mainItems: { label: string; onClick: () => void }[]
  servicesItems: { label: string; onClick: () => void }[]
}

const BurgerHeaderMenu = ({
  isOpen,
  handleClose,
  mainItems,
  servicesItems,
}: Props) => {
  const t = useTranslations('')

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) return

  return (
    <BackgroundOverlay>
      <Container>
        <TopFrame>
          <Logo>DC</Logo>
          <CloseButton onClick={handleClose}>
            <Image src={closeX} alt='close icon' />
          </CloseButton>
        </TopFrame>
        <MiddleFrame>
          <MiddleBox mainItems={mainItems} servicesItems={servicesItems} />
          <Line />
        </MiddleFrame>
        <BottomFrame>
          <SearchButton onClick={() => {}} height={44} width={56} />
          <LoginButton text={t('login')} />
          <LangChangeButton left={7} top={56} width={76} />
        </BottomFrame>
      </Container>
    </BackgroundOverlay>
  )
}

export default BurgerHeaderMenu

const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 16px 24px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MiddleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 24px;
  gap: 8px;
`

const BackgroundOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors?.button_black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;

  display: flex;
  justify-content: center;
  align-items: center;
`
const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors?.white_10};
  border-radius: ${({ theme }) => theme.radius?.lg};
`
const Logo = styled.label`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  padding: 12px 16px;

  cursor: default;
`

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.white_24};
  margin: 0px 24px;
`
