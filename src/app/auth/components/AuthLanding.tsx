import AppButton from '@/common/components/appButton/AppButton'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import landingPicture from '@/assets/images/landingPicture.svg'

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
        <ImageFrame>
          {/* <Image src={landingPicture} alt='landing picture' /> */}
          <img
            // src={'.}
            src='https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg'
            alt='landing picture'
            style={{ width: '200px', height: '100vh' }}
          />
        </ImageFrame>
      )}
    </Container>
  )
}

export default AuthLanding

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
`
const ImageFrame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 416px;
  gap: 16px;
`

const Frame = styled.div`
  position: absolute;
  left: 120px;
  /* top: 419px; */
  top: 230px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 999;
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
