import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import ImagesUploadComponent from '../../../components/common/ImagesUploadComponent'
import AppSelectBasic from '@/common/components/appSelect/AppSelectBasic'
import AppSelectAntDesign from '@/common/components/appSelect/AppSelectAntDesign'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'
import FileDropZone from '@/common/components/inputElements/FileDropZone'

const INPUT_WIDTH_MOBILE_UPLOAD = 311
const INPUT_WIDTH_TABLET_UPLOAD = 896
const INPUT_WIDTH_DESKTOP_UPLOAD = 1136

const INPUT_WIDTH_MOBILE = 311
const INPUT_WIDTH_DESKTOP = 493

type Props = { dropdownOptions: { value: IMAGE_LOCATIONS }[] }

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
          width={isMobile ? INPUT_WIDTH_MOBILE : INPUT_WIDTH_DESKTOP}
          placeHolderIsBold={true}
          placeHolderIsGray={true}
        />
        {/* <AppSelectAntDesign
          // value={value}
          optionsBasic={dropdownOptions}
          // onChangeString={handleSetValueBasic ? handleSetValueBasic : () => {}}
          // errorMessage={errorMessage}
          placeholder={t('mark photo location')}
          width={isMobile ? INPUT_WIDTH_MOBILE : INPUT_WIDTH_DESKTOP}
          fontSize={13}
        /> */}
      </AppSelectBasicFrame>
      <ImagesUploadComponent
        width={
          isMobile
            ? INPUT_WIDTH_MOBILE_UPLOAD
            : isTablet
              ? INPUT_WIDTH_TABLET_UPLOAD
              : INPUT_WIDTH_DESKTOP_UPLOAD
        }
        height={222}
        text={t('add photos of vehicle')}
        dropText={t('drop the files here')}
        uploadedText={t('photos uploaded')}
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
