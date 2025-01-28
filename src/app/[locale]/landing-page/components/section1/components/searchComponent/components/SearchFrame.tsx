import React from 'react'
import styled from 'styled-components'
import LabelAndDropdownPair from './LabelAndDropdownPair'
import { useTranslations } from 'next-intl'
import BasicButton from '@/common/components/appButton/BasicButton'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import DropdownMakeSearch from '@/app/[locale]/search-vehicle/components/DropdownMakeSearch'
import DropdownModelSearch from '@/app/[locale]/search-vehicle/components/DropdownModelSearch'
import YearSelector from '@/app/[locale]/search-vehicle/components/YearSelector'
import { useSearchVehicle } from '@/app/[locale]/search-vehicle/hooks/useSearchVehicle'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

type Props = {}

const SearchFrame = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')
  const router = useRouter()

  const inputWidth = isMobile ? 343 : isTablet ? 215 : 275

  const { handleSubmit } = useSearchVehicle()

  const handleSearch = async () => {
    try {
      console.log('zdees')
      await handleSubmit()
      router.push(routeName.searchVehicle)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Container>
      <Frame>
        <LabelAndDropdownPair
          label={t('manufacturer')}
          placeholder={t('manufacturer')}
          input={<DropdownMakeSearch width={inputWidth} />}
        />
        <LabelAndDropdownPair
          label={t('model')}
          placeholder={t('model')}
          input={<DropdownModelSearch width={inputWidth} />}
        />
        <LabelAndDropdownPair
          label={t('year')}
          placeholder={t('year')}
          input={<YearSelector height={48} />}
        />
      </Frame>
      <BasicButton
        onClick={handleSearch}
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
