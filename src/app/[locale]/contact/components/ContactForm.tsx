import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import theme from '../../theme'

import BasicButton from '@/common/components/appButton/BasicButton'
import InputsFrame from './InputsFrame'
import PageHeader from './PageHeader'

type Props = { headerText: string; text: string; isHeaderCentered?: boolean }

const ContactForm = ({ headerText, text, isHeaderCentered }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={headerText}
        text={text}
        headerColor={theme.colors?.black}
        textColor={theme.colors?.main_gray_42}
        isHeaderCentered={isHeaderCentered}
      />
      <InputsFrame />
      <BasicButton onClick={() => {}} height={56}>
        <ButtonLabel>{t('send message')}</ButtonLabel>
      </BasicButton>
    </Container>
  )
}

export default ContactForm

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 564px;
  height: 654px;

  @media ${({ theme }) => theme.media?.md} {
    width: 414px;
    height: 701px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 350px;
    height: unset;
    gap: 32px;
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  cursor: pointer;
`
