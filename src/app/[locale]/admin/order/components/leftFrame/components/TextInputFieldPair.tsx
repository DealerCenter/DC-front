import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/InputElements/TextInput'
import AppSelectBasic from '@/common/components/appSelect/AppSelectBasic'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { Locations } from '@/app/[locale]/admin/create-order/image-upload/components/InputFieldAndImageUploadPair'

type Props = {
  isEditing: boolean
  title: string
  value: string
  selectItems?: { value: string }[]
  isYes?: boolean
}

const TextInputFieldPair = ({
  isEditing,
  title,
  value,
  selectItems,
  isYes,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <>
      {isEditing ? (
        <LabelPair isEditing={isEditing}>
          <TextInput
            width={isMobile ? 160 : isTablet ? 220 : 240}
            height={48}
            type='text'
            name={title}
            placeholder={t(title)}
            value={''}
            onChange={() => {}}
            onBlur={() => {}}
            fontWeight='bold'
            fontSize={13}
            isOutline={false}
          />
          {selectItems ? (
            <AppSelectBasic
              options={selectItems}
              onChange={() => {}}
              placeholder={t('select')}
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
          ) : (
            <TextInput
              width={isMobile ? 143 : 220}
              height={48}
              type='text'
              name={`value of ${title}`}
              placeholder={''}
              value={value}
              onChange={() => {}}
              onBlur={() => {}}
              fontWeight='bold'
              fontSize={13}
              isOutline={false}
            />
          )}
        </LabelPair>
      ) : (
        <LabelPair isEditing={isEditing}>
          <Label>{t(title)}</Label>
          {selectItems ? (
            <IconLabelBox>
              {isYes && (
                <>
                  <Value>{t('yes')}</Value>
                  <IconBox>
                    <Image src={checkedGreen} alt='checked icon' />
                  </IconBox>
                </>
              )}
            </IconLabelBox>
          ) : (
            <Value>{value}</Value>
          )}
        </LabelPair>
      )}
    </>
  )
}

export default TextInputFieldPair

type LabelPairProps = { isEditing: boolean }

const LabelPair = styled.div<LabelPairProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 36px;

  ${({ isEditing }) =>
    isEditing
      ? css`
          gap: ${({ theme }) => theme.spacing?.lg};
        `
      : css`
          gap: ${({ theme }) => theme.spacing?.xl};
        `}

  @media ${({ theme }) => theme.media?.sm} {
    ${({ isEditing }) =>
      isEditing
        ? css`
            gap: 8px;
          `
        : css`
            gap: ${({ theme }) => theme.spacing?.md};
          `}
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  width: 180px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 142px;
  }
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
