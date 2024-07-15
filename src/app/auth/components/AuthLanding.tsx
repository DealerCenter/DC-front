import AppButton from '@/common/components/appButton/AppButton'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import landingPicture from '@/assets/images/landingPicture.svg'
import Image from 'next/image'

type Props = { goToLogin: () => void; goToRegistration: () => void }

const AuthLanding = ({ goToLogin, goToRegistration }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <TextFrame>
          <Text>{t('bring your car')}</Text>
        </TextFrame>
        <ButtonFrame>
          <AppButton
            type='outlined'
            text={t('register')}
            disabled={false}
            onClick={goToRegistration}
            isSmall={true}
          />

          <AppButton
            type='filled'
            text={t('login')}
            disabled={false}
            onClick={goToLogin}
            isSmall={true}
          />
        </ButtonFrame>
      </Frame>
      {!isMobile && (
        <ImageWrapper>
          <Image
            src={landingPicture}
            alt='landing picture'
            layout='fill'
            objectFit='cover'
          />
        </ImageWrapper>
      )}
    </Container>
  )
}

export default AuthLanding

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 416px;
  gap: 16px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 999;
  margin-left: 120px;
`
const TextFrame = styled.div`
  width: 703px;
`

const Text = styled.p`
  font-size: 36px;
  font-weight: 500;
  padding: 10px 0;
  margin: 0;
`
const ImageWrapper = styled.div`
  height: 100vh;
  width: 40%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`
