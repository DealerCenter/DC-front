import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import ImagesUploadComponent from '../../../components/common/ImagesUploadComponent'
import AppSelectBasic from '@/common/components/appSelect/AppSelectBasic'
import { Locations } from '../../../create-order/image-upload/components/InputFieldAndImageUploadPair'

type Props = { dropdownOptions: { value: string }[] }

const InputFieldAndImageUploadPair = ({ dropdownOptions }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Container>
      <AppSelectBasicFrame>
        <AppSelectBasic
          options={dropdownOptions}
          onChange={() => {}}
          placeholder={t('mark photo location')}
          width={isMobile ? 311 : 493}
          placeHolderIsBold={true}
          placeHolderIsGray={true}
          selectedLocations={{
            towTruckImages: false,
            abroadPortImages: false,
            containerImages: false,
            homePortImages: false,
          }}
          setSelectedLocations={function (
            value: React.SetStateAction<Locations>
          ): void {
            throw new Error('Function not implemented.')
          }}
        />
      </AppSelectBasicFrame>
      <ImagesUploadComponent
        // onClick={() => {
        //   console.log('clicked')
        // }}
        width={isMobile ? 311 : isTablet ? 896 : 1136}
        height={222}
      />
    </Container>
  )
}

export default InputFieldAndImageUploadPair

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.md};
  }
`
const AppSelectBasicFrame = styled.div`
  display: flex;
  justify-content: flex-start;
`
