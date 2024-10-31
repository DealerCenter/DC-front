import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import theme from '@/app/[locale]/theme'

import AppSelectBasic from '@/common/components/appSelect/AppSelectBasic'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'
import ImagesUploadComponent from '../../../components/common/ImagesUploadComponent'

const INPUT_WIDTH_MOBILE_UPLOAD = 311
const INPUT_WIDTH_TABLET_UPLOAD = 896
const INPUT_WIDTH_DESKTOP_UPLOAD = 1136

const INPUT_WIDTH_MOBILE = 311
const INPUT_WIDTH_DESKTOP = 493

export type Locations = {
  towTruckImages: boolean
  abroadPortImages: boolean
  containerImages: boolean
  homePortImages: boolean
}

// const dropdownOptions = [
//   { value: IMAGE_LOCATIONS.TOW_TRUCK },
//   { value: IMAGE_LOCATIONS.ABROAD_PORT },
//   { value: IMAGE_LOCATIONS.CONTAINER },
//   { value: IMAGE_LOCATIONS.HOME_PORT },
// ]

type Props = {
  setSelectedLocations: Dispatch<SetStateAction<Locations>>
  selectedLocations: Locations
  ImageLocations: IMAGE_LOCATIONS[]
}

const InputFieldAndImageUploadPair = ({
  setSelectedLocations,
  selectedLocations,

  ImageLocations,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')
  const previousValue = useRef<string>()
  const [currentLocation, setCurrentLocation] = useState<IMAGE_LOCATIONS>()

  // const { setUploadedTowTruckImages, setFieldValue, values } =
  //   useCreateOrderContext()

  // console.log('previousValue:', previousValue)

  const handleChange = (e: string) => {
    setSelectedLocations((prev) => ({
      ...prev,
      [`${e}`]: true,
      [`${previousValue.current}`]: false,
    }))
    previousValue.current = e
  }

  return (
    <Container>
      <AppSelectBasicFrame>
        <AppSelectBasic
          // options={dropdownOptions}
          optionsLocations={ImageLocations}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          onChange={(e) => handleChange(e)}
          placeholder={t('mark photo location')}
          width={isMobile ? INPUT_WIDTH_MOBILE : INPUT_WIDTH_DESKTOP}
          placeHolderIsBold={true}
          placeHolderIsGray={true}
          setCurrentLocation={setCurrentLocation}
        />
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
        isDisabled={previousValue.current === undefined}
        currentLocation={currentLocation}
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
