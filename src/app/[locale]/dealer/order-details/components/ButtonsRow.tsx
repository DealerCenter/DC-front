import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'
import AppSelect from './AppSelect'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import BasicButton from '@/common/components/appButton/BasicButton'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'

type Props = {
  selectedImageLocation: IMAGE_LOCATIONS
  setSelectedImageLocation: (arg: IMAGE_LOCATIONS) => void
  availableLocations: { value: IMAGE_LOCATIONS }[]
}

const ButtonsRow = ({
  selectedImageLocation,
  setSelectedImageLocation,
  availableLocations,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <>
      {isMobile ? (
        <AppSelect
          options={availableLocations}
          selectedOption={selectedImageLocation}
          setSelectedOption={setSelectedImageLocation}
        />
      ) : (
        <ButtonsFrame>
          {availableLocations.map((option, i) => (
            <React.Fragment key={`shippingOptionButtonFragment${i}`}>
              {i !== 0 && (
                <Image
                  src={splitGrayLine}
                  alt='line icon'
                  key={`splitGrayLine${i}`}
                />
              )}
              <BasicButton
                key={`shippingOptionButton${i}`}
                onClick={() => {
                  setSelectedImageLocation(option.value)
                }}
                height={48}
                color={
                  option.value === selectedImageLocation ? 'black' : 'white'
                }
              >
                {t(option.value)}
              </BasicButton>
            </React.Fragment>
          ))}
        </ButtonsFrame>
      )}
    </>
  )
}

export default ButtonsRow

const ButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 6px;

  gap: 8px;
`
