'use client'
import Header from '@/common/components/header/Header'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from '@/common/components/header/BurgerHeader'
import AppButton from '@/common/components/appButton/AppButton'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import Image from 'next/image'
import landingPicture from '@/assets/pictures/landingPicture.svg'

export default function Page() {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const t = useTranslations('')

  return (
    <main>
      <Container>
        <Frame>
          <TextFrame>
            <Text>ჩამოიყვანე ავტომობილი ამერიკიდან მარტივად და უსაფრთხოდ</Text>
          </TextFrame>
          <ButtonFrame>
            <AppButton
              type='outlined'
              text={t('register')}
              disabled={false}
              onClick={() => {}}
              isSmall={true}
            />
            <AppButton
              type='filled'
              text={t('login')}
              disabled={false}
              onClick={() => {}}
              isSmall={true}
            />
          </ButtonFrame>
        </Frame>
        <ImageFrame>
          <Image src={landingPicture} alt='landing picture' />
        </ImageFrame>
      </Container>
    </main>
  )
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})

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
