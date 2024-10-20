import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import BasicButton from '@/common/components/appButton/BasicButton'

import documentIcon from '@/assets/icons/documentIconBlack.svg'
import plusIconWhite from '@/assets/icons/plusIconWhite.svg'
import { useTranslations } from 'next-intl'

type Props = { onClick: () => void }

const AddYourFirstTask = ({ onClick }: Props) => {
  const t = useTranslations('')

  return (
    <FrameToCenter>
      <Container>
        <Frame1>
          <Image src={documentIcon} alt='document icon' />
          <TextFrame>
            <Header>{t('add your first task')}</Header>
            <Text>{t('create any task with status')}</Text>
          </TextFrame>
        </Frame1>
        <BasicButton onClick={onClick} width={155}>
          <ButtonLabelFrame>
            <Image src={plusIconWhite} alt='plus icon' />
            <ButtonLabel>{t('new issue')}</ButtonLabel>
          </ButtonLabelFrame>
        </BasicButton>
      </Container>
    </FrameToCenter>
  )
}

export default AddYourFirstTask

const FrameToCenter = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  gap: ${({ theme }) => theme.spacing?.xl};
`

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const Header = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.button_black};
  text-align: center;
`

const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.button_black};
  text-align: center;
`

const ButtonLabelFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ButtonLabel = styled.label`
  color: ${({ theme }) => theme.colors?.white};
  white-space: nowrap;

  cursor: pointer;
`
