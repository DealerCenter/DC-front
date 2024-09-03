import React from 'react'
import styled from 'styled-components'
import PageHeader from './PageHeader'
import { useTranslations } from 'next-intl'
import theme from '../../theme'
import BasicButton from '@/common/components/appButton/BasicButton'
import InputsFrame from './InputsFrame'
import { useMediaQuery } from 'react-responsive'

type Props = {}

const ContactForm = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const tContact = useTranslations('contactPage')
  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={tContact(
          'to improve our services and functionalities together'
        )}
        text={tContact(
          'fill out the form and tell us what you would like to improve'
        )}
        headerColor={theme.colors?.black}
        textColor={theme.colors?.main_gray_42}
      />
      <InputsFrame />
      <BasicButton
        onClick={() => {}}
        height={56}
        width={isMobile ? 350 : isTablet ? 414 : 564}
      >
        <ButtonLabel>{t('send message')}</ButtonLabel>
      </BasicButton>
    </Container>
  )
}

export default ContactForm

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 64px;

  width: 564px;

  @media ${({ theme }) => theme.media?.md} {
    width: 414px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 350px;
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  cursor: pointer;
`
