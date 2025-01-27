import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

import InfoBox from './components/InfoBox'
import ButtonsBox from './components/buttonsBox/ButtonsBox'
import PageHeader from '@/common/components/pageHeader/PageHeader'
import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'
import { getDocumentsData } from '@/api/apiCalls'
import { DOCUMENT_CHECK_RES } from '@/api/apiTypes'
import StatusIndicator from './components/StatusIndicator'

type Props = {}

const DocumentCheck = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const [data, setData] = useState<DOCUMENT_CHECK_RES[]>([])
  const [selectedDocument, setSelectedDocument] = useState('')
  const [selectedDocDetails, setSelectedDocDetails] =
    useState<DOCUMENT_CHECK_RES>({
      id: NaN,
      label: '',
      description: '',
      document: '',
      code: '',
    })

  useEffect(() => {
    const getData = async () => {
      const res = await getDocumentsData()
      if (res) {
        const mapped: DOCUMENT_CHECK_RES[] = res.map(
          (i: DOCUMENT_CHECK_RES) => ({
            id: i.id,
            document: i.document,
            description: i.description,
            code: i.code,
            label: i.document,
          })
        )
        setData(mapped)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    // @ts-ignore
    setSelectedDocDetails(data.find((i: any) => i.id == selectedDocument))
  }, [selectedDocument])

  return (
    <Container>
      <SearchFrame>
        <PageHeader
          headerText={t('document check')}
          text={`${t(
            'specify type of document and get detailed information'
          )} ${
            !isMobile &&
            t('find out if problematic and how good an investment it can be')
          }`}
          textColor={theme.colors?.main_gray_42}
        />
        <SearchBox>
          <AppSelectAntDesignWithFetch
            options={data}
            isLoading={false}
            onChange={() => {}}
            value={selectedDocument}
            setValue={setSelectedDocument}
          />

          <ButtonsBox />
        </SearchBox>
      </SearchFrame>
      {selectedDocument && selectedDocDetails && (
        <SelectedDoc>
          <h3>Document details</h3>
          <StatusIndicatorFrame>
            <DocText>{selectedDocDetails.document}</DocText>
            <StatusIndicator statusCode={Number(selectedDocDetails.code)} />
          </StatusIndicatorFrame>
        </SelectedDoc>
      )}
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

const SelectedDoc = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 16px;
  padding: 16px;
`
const StatusIndicatorFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DocText = styled.span`
  font-size: 16px;
  font-weight: 500;
`
