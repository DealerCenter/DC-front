import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import SearchComponent from './components/SearchComponent'
import ContainersListBox from './components/ContainersListBox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'

type Props = {}

const BindContainerBox = (props: Props) => {
  const [containerLinkValue, setContainerLinkValue] = useState('')
  const t = useTranslations('')

  const handleAddNew = () => {}

  return (
    <BindContainerFrame>
      <Label>{t('choose from list')}</Label>

      <SearchFrame>
        <SearchComponent />
        <ContainersListBox />
      </SearchFrame>
      <Label>{t('or')}</Label>
      <TextInput
        type='text'
        name='container link'
        placeholder={t('specify container link')}
        value={containerLinkValue}
        onChange={(e) => setContainerLinkValue(e.target.value)}
        onBlur={() => {}}
        width={323}
        isOutline={false}
      ></TextInput>
      <AppButton
        text={t('add new')}
        type='filled'
        disabled={false}
        onClick={handleAddNew}
        isSmall={false}
        height='medium'
        width={323}
      ></AppButton>
    </BindContainerFrame>
  )
}

export default BindContainerBox

const BindContainerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
  margin-top: ${({ theme }) => theme.spacing?.md};
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  text-align: center;
`

const SearchFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`
