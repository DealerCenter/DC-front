import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import DetailsBox from './DetailsBox'

type Props = {}

const DetailsFrame = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Header>{t('we offer all services in one space')}</Header>
      <DetailsBox
        headerText={'Support'}
        text={t('our team is ready to help')}
        textBlue={'Info@DealerCenter.ge'}
      />
      <DetailsBox
        headerText={'Sales'}
        text={t('have questions? contact us')}
        textBlue={'Sales@DealerCenter.ge'}
      />
      <DetailsBox
        headerText={'Phone'}
        text={t('monday-friday 9-5')}
        textBlue={'+1 (949) 880-6820'}
      />
    </Container>
  )
}

export default DetailsFrame

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 564px;

  gap: 60px;

  @media ${({ theme }) => theme.media?.md} {
    width: 332px;
  }
`

const Header = styled.h2`
  margin: 0;
  font-size: 33px;
  color: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
`
