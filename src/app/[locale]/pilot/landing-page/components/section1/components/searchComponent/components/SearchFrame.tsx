import React from 'react'
import styled from 'styled-components'
import LabelAndDropdownPair from './LabelAndDropdownPair'
import { useTranslations } from 'next-intl'
import BasicButton from '@/common/components/appButton/BasicButton'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'

type Props = {}

const SearchFrame = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <LabelAndDropdownPair
          label={t('manufacturer')}
          placeholder={'ავტ. მარკა'}
        />
        <LabelAndDropdownPair label={t('model')} placeholder={'მოდელი'} />
        <LabelAndDropdownPair label={t('year')} placeholder={'გამ. წელი'} />
      </Frame>
      <BasicButton
        onClick={() => {}}
        height={56}
        width={isMobile ? 343 : isTablet ? 215 : 275}
      >
        <ButtonLabel>{t('search')}</ButtonLabel>
      </BasicButton>
    </Container>
  )
}

export default SearchFrame

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing?.lg};
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
`
