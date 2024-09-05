import React, { useEffect, useState } from 'react'
import TextInputField from './TextInputField'
import styled from 'styled-components'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import { useTranslations } from 'next-intl'
import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'

type Props = {
  headerText: string
  Label1: string
  Label2: string
  Label3: string
  placeholder1?: string
  placeholder2?: string
  placeholder3?: string
  initialValue1: string
  initialValue2: string
  initialValue3: string
  onChange1?: string
  onSave: () => void
}

const InputFieldsBox = ({
  headerText,
  Label1,
  Label2,
  Label3,
  placeholder1,
  placeholder2,
  placeholder3,
  initialValue1,
  initialValue2,
  initialValue3,
  onSave,
}: Props) => {
  const [isSaved, setIsSaved] = useState(true)
  const t = useTranslations('')

  const handleSave = () => {
    onSave()
    setIsSaved(true)
  }

  return (
    <Container>
      <InputFieldsHeader
        text={headerText}
        onEdit={() => {}}
        onArrowDown={() => {}}
      />
      <InputFieldsFrame>
        <TextInputField
          label={Label1}
          placeholder={placeholder1}
          onChange={() => setIsSaved(false)}
          initialValue={initialValue1}
        />
        <TextInputField
          label={Label2}
          placeholder={placeholder2}
          onChange={() => setIsSaved(false)}
          initialValue={initialValue2}
        />
        <TextInputField
          label={Label3}
          placeholder={placeholder3}
          onChange={() => setIsSaved(false)}
          initialValue={initialValue3}
        />
      </InputFieldsFrame>
      {!isSaved && (
        <ButtonFrame>
          <FormSaveButton text={t('save')} onClick={handleSave} />
        </ButtonFrame>
      )}
    </Container>
  )
}

export default InputFieldsBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const InputFieldsFrame = styled.div`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
