import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import PageHeader from './common/PageHeader'
import SearchComponent from './section1/components/searchComponent/SearchComponent'

type Props = {}

const SearchForDesiredCar = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={t('search for desired car')}
        text={
          'რაღაც ტექსტი იმის შესახებ თუ რამდენად მარტივად და ერთ სივრცეში შეგიძლია ავტომობილების მოძებნა და გაფილტვრა სხვადსხვა მახასიათებლით'
        }
        textColor={theme.colors?.main_gray_42}
      />
      <SearchComponent />
    </Container>
  )
}

export default SearchForDesiredCar

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 60px;
  padding: 80px 0;
  width: 1200px;

  margin-bottom: 110px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
  }
`
