import { useTranslations } from 'next-intl'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import theme from '@/app/[locale]/pilot/theme'
import AppSelectAntDesign from '@/common/components/appSelect/AppSelectAntDesign'
import AppSelectTrueFalse from '@/common/components/appSelect/AppSelectTrueFalse'
import TextInput from '@/common/components/InputElements/TextInput'

const TEXT_INPUT_WIDTH_MOBILE = 160
const TEXT_INPUT_WIDTH_TABLET = 220
const TEXT_INPUT_WIDTH_DESKTOP = 240
const TEXT_INPUT_WIDTH_MOBILE_2 = 143
const TEXT_INPUT_WIDTH_DESKTOP_2 = 220

type Props = {
  title: string
  value: string | number
  booleanValue?: boolean
  placeholder?: string
  name?: string
  onBlur?: ChangeEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  errorMessage?: string

  optionsListWidthID?: { label: string; id: number }[]
  handleSetValueWithId?: (id: number) => void
  selectOptionsBasic?: string[]
  handleSetValueBasic?: (value: string) => void
  onYesOrNoChange?: (value: boolean) => void
}

const TextInputFieldPair = ({
  title,
  value,
  booleanValue,
  placeholder,
  name,
  onBlur,
  onChange,
  errorMessage,
  optionsListWidthID,
  handleSetValueWithId,
  selectOptionsBasic,
  handleSetValueBasic,
  onYesOrNoChange,
}: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(220)
  const [textInputWidth2, setTextInputWidth2] = useState(220)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  useEffect(() => {
    setTextInputWidth(
      isMobile
        ? TEXT_INPUT_WIDTH_MOBILE
        : isTablet
        ? TEXT_INPUT_WIDTH_TABLET
        : TEXT_INPUT_WIDTH_DESKTOP
    )
  }, [isMobile, isTablet, setTextInputWidth])

  useEffect(() => {
    setTextInputWidth2(
      isMobile ? TEXT_INPUT_WIDTH_MOBILE_2 : TEXT_INPUT_WIDTH_DESKTOP_2
    )
  }, [isMobile, setTextInputWidth2])

  return (
    <LabelPair>
      <TextInput
        width={textInputWidth}
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
        isDisabled={true}
      />
      {onYesOrNoChange ? (
        <AppSelectTrueFalse
          booleanValue={booleanValue}
          onChange={onYesOrNoChange}
          placeholder={t('select')}
          errorMessage={errorMessage}
          width={textInputWidth2}
          fontSize={13}
        />
      ) : optionsListWidthID ? (
        <AppSelectAntDesign
          value={value}
          optionsWithId={optionsListWidthID}
          onChangeId={handleSetValueWithId ? handleSetValueWithId : () => {}}
          placeholder={t('select')}
          errorMessage={errorMessage}
          width={textInputWidth2}
          fontSize={13}
        />
      ) : selectOptionsBasic ? (
        <AppSelectAntDesign
          value={value}
          optionsBasic={selectOptionsBasic}
          onChangeString={handleSetValueBasic ? handleSetValueBasic : () => {}}
          errorMessage={errorMessage}
          placeholder={t('select')}
          width={textInputWidth2}
          fontSize={13}
        />
      ) : (
        <TextInput
          width={textInputWidth2}
          height={48}
          type='text'
          name={name ? name : ''}
          placeholder={placeholder ? placeholder : ''}
          value={value}
          onChange={onChange ? onChange : () => {}}
          onBlur={onBlur ? onBlur : () => {}}
          fontWeight='bold'
          fontSize={13}
          isOutline={false}
          errorMessage={errorMessage}
        />
      )}
    </LabelPair>
  )
}

export default TextInputFieldPair

const LabelPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 36px;

  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
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
