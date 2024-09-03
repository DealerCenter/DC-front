import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../common/PageHeader'
import { useTranslations } from 'next-intl'
import InfoLabels from './InfoLabels'

type Props = {}

const SuccessStory = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={t('success story')}
        text='აქ შეიძლება რაღაც სტატისტიკები ვაჩვენოთ როგორ ჩამოდიან ეს ავტომობილები'
      />
      <LabelsBox>
        <InfoLabels
          header='178 მომხმარებელი'
          label='დარეგისტრირებული მომხმარებელი'
        />
        <InfoLabels header='245 შეკვეთა' label='ადგილზე ჩამოსული ავტომობილი' />
      </LabelsBox>
    </Container>
  )
}

export default SuccessStory

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 32px;
  gap: 60px;

  width: 1280px;

  @media ${({ theme }) => theme.media?.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
  }
`

const LabelsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    flex-direction: column;
  }
`
