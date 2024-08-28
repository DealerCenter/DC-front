import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const PageHeader = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Header>{t('search for desired car')}</Header>
      <Text>
        {
          'რაღაც ტექსტი იმის შესახებ თუ რამდენად მარტივად და ერთ სივრცეში შეგიძლია ავტომობილების მოძებნა და გაფილტვრა სხვადსხვა მახასიათებლით'
        }
      </Text>
    </Container>
  )
}

export default PageHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing?.xl};
`

const Header = styled.h2`
  margin: 0;
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`
const Text = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
`
