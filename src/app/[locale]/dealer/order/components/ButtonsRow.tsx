import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'
import AppSelect from './AppSelect'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import BasicButton from '@/common/components/appButton/BasicButton'

type Props = {}

type stateOptions = 'evacuator' | 'usa port' | 'container' | 'georgian port'

type Option = {
  value: stateOptions
}

const options: Option[] = [
  {
    value: 'evacuator',
  },
  {
    value: 'usa port',
  },
  {
    value: 'container',
  },
  {
    value: 'georgian port',
  },
]

const ButtonsRow = (props: Props) => {
  const [selectedOption, setSelectedOption] =
    useState<stateOptions>('container')

  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <>
      {isMobile ? (
        <AppSelect
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <ButtonsFrame>
          {options.map((option, i) => (
            <React.Fragment key={`shippingOptionButton${i}`}>
              {i !== 0 && <Image src={splitGrayLine} alt='line icon' />}
              <BasicButton
                onClick={() => {
                  setSelectedOption(option.value)
                }}
                height={48}
                color={option.value === selectedOption ? 'black' : 'white'}
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
