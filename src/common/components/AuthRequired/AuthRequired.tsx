import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styled from 'styled-components'

import ChooseButton from '../appButton/ChooseButton'
import BasicButton from '../appButton/BasicButton'
import SecondaryButton from '../appButton/SecondaryButton'
import { Basic } from 'next/font/google'
import AppButton from '../appButton/AppButton'

import closeIcon from '@/assets/icons/closeX.svg'
import personIcon from '@/assets/icons/person2White.svg'

type Props = { onCancel: () => void; onAuth: () => void }

const AuthRequired = ({ onCancel, onAuth }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <FrameTop>
        <H3Bold>{t('authorization required!')}</H3Bold>
        <StyledP>{t('to place bid log in or register')}</StyledP>
      </FrameTop>
      <ButtonsFrame>
        <ChooseButton
          text={t('cancel')}
          isActive={false}
          onClick={onCancel}
          fontSize={'16px'}
          withBorder={true}
          height={44}
        />

        <BasicButton onClick={onAuth} padding={20} height={44}>
          <ButtonFrame>
            <ButtonIcon>
              <Image src={personIcon} alt='close icon' width={16} height={20} />
            </ButtonIcon>
            <ButtonLabel>{t('authorization')}</ButtonLabel>
          </ButtonFrame>
        </BasicButton>
      </ButtonsFrame>
    </Container>
  )
}

export default AuthRequired

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
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
  gap: 8px;
`

const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.md};
  gap: ${({ theme }) => theme.spacing?.xl};
  margin-top: 200px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px 16px;
  }
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
`
