import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import containersImage from '@/assets/images/containersImageOrange.jpeg'
import { useMediaQuery } from 'react-responsive'
import theme from '../theme'
import ContactForm from './components/ContactForm'
import { useTranslations } from 'next-intl'

type Props = {}

const Contact = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  return (
    <Container>
      {!isMobile && (
        <ImageFrame>
          <Image
            src={containersImage}
            alt='container image'
            layout='responsive'
          />
        </ImageFrame>
      )}
      <ContactForm
        headerText={t('to improve our services and functionalities together')}
        text={t('fill out the form and tell us what you would like to improve')}
      />
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.white};
  width: 100%;

  padding: 96px 0;
  gap: 64px;
  opacity: 0px;
`

const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  line-height: 0;

  width: 568px;
  height: 654px;

  border-radius: 16px;

  overflow: hidden;

  @media ${({ theme }) => theme.media?.md} {
    width: 490px;
    height: 701px;
  }
`
