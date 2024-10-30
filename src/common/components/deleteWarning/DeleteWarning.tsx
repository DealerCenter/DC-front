import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import closeIcon from '@/assets/icons/closeX.svg'
import ChooseButton from '../appButton/ChooseButton'

type Props = {
  onCancel: () => void
  onDelete: () => void
  header?: string
  text?: string
  deletingItemText?: string
}

const DeleteWarning = ({
  onCancel,
  onDelete,
  header,
  text,
  deletingItemText,
}: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Icon onClick={onCancel}>
        <Image src={closeIcon} alt='close icon' width={12} height={12} />
      </Icon>
      <FrameTop>
        <H3Bold>{header}</H3Bold>
        <StyledP>{text}</StyledP>
        {deletingItemText && <StyledPBold>{deletingItemText}</StyledPBold>}
      </FrameTop>
      <ButtonsFrame>
        <ChooseButton
          text={t('cancel')}
          isActive={true}
          onClick={onCancel}
          fontSize={'16px'}
        />
        <ChooseButton
          text={t('delete')}
          isActive={false}
          onClick={onDelete}
          withBorder={true}
          fontSize={'16px'}
        />
      </ButtonsFrame>
    </Container>
  )
}

export default DeleteWarning

const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  margin: 0;

  cursor: default;
`

const StyledPBold = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  margin: 0;

  cursor: default;
`

const H3Bold = styled.h3`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  margin: 0;

  cursor: default;
`

const FrameTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 369px;
  border-radius: 24px;
  padding: 32px;
  gap: 24px;
  margin-top: 200px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px;
  }
`
