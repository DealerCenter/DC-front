import AppButton from '@/common/components/appButton/AppButton'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import landingPicture from '@/assets/images/landingPicture.svg'
import Image from 'next/image'
import theme from '../../theme'
import Header from '@/common/components/header/Header'

type Props = { goToLogin: () => void; goToRegistration: () => void }

const AuthLanding = ({ goToLogin, goToRegistration }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <>
      <HeaderBox>
        <Header />
      </HeaderBox>
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
              style={{ objectFit: 'cover' }}
              priority
              fill
            />
          </ImageWrapper>
        )}
      </Container>
    </>
  )
}

export default AuthLanding

const HeaderBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1000;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 100px;

  @media ${({ theme }) => theme.media?.sm} {
    padding-top: 150px;
    justify-content: center;
  }
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 416px;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing?.xl};
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  z-index: 999;
  margin-left: 120px;

  @media ${({ theme }) => theme.media?.md} {
    margin-left: 100px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    margin-left: unset;
    gap: ${({ theme }) => theme.spacing?.xl};
    gap: 70px;
  }
`

const TextFrame = styled.div`
  width: 703px;

  @media ${({ theme }) => theme.media?.md} {
    width: 500px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 416px;
  }
`

const Text = styled.p`
  font-size: 36px;
  font-weight: 500;
  padding: 10px 0;
  margin: 0;

  @media ${({ theme }) => theme.media?.sm} {
    text-align: center;
  }
`
const ImageWrapper = styled.div`
  height: 100vh;
  width: 40%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`
