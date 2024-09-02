import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

import InfoBox from './components/InfoBox'
import SearchComponent from './components/SearchComponent'
import PageHeader from '../../../common/PageHeader'
import ButtonsBox from './components/buttonsBox/ButtonsBox'

type Props = {}

const DocumentCheck = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <SearchFrame>
        <PageHeader
          headerText={t('document check')}
          text={`${t('specify type of document and get detailed information')} ${
            !isMobile &&
            t('find out if problematic and how good an investment it can be')
          }`}
          textColor={theme.colors?.main_gray_42}
        />
        <SearchBox>
          <SearchComponent placeholder='blalblabl' />
          <ButtonsBox />
        </SearchBox>
      </SearchFrame>
      <TextBoxesFrame>
        <InfoBox
          header={t('enter the name of the document')}
          text={t('search for document and enter in search field')}
        />
        <InfoBox
          header={t('check status')}
          text={t('find status of vehicle and see whether it is problem-free')}
        />
        <InfoBox
          header={t('make a wise decision')}
          text={t('find out if it is necessary to contact the company')}
        />
      </TextBoxesFrame>
    </Container>
  )
}

export default DocumentCheck

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 100px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 64px 0;
  }

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xl};
    padding: 64px 0;
  }
`

const SearchFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;

  @media ${({ theme }) => theme.media?.notSm} {
    width: 860px;
  }
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

const TextBoxesFrame = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
    flex-direction: column;
    gap: 8px;
  }
`
