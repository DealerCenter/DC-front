import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import SearchComponent from './SearchComponent'
import ContainersListBox from './ContainersListBox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import { getContainersAdmin } from '@/api/apiCalls'
import { CONTAINER_GET_RES } from '@/api/apiTypes'

type Props = {
  setContainerToBind: (arg: CONTAINER_GET_RES | null) => void
  setIsOpen: (arg: boolean) => void
}

const BindContainerBox = ({ setContainerToBind, setIsOpen }: Props) => {
  const [containerLinkValue, setContainerLinkValue] = useState('')

  const [containersList, setContainersList] = useState<CONTAINER_GET_RES[]>()
  const [filteredContainersList, setFilteredContainersList] =
    useState<CONTAINER_GET_RES[]>()

  const [searchQuery, setSearchQuery] = useState('')

  const t = useTranslations('')

  const handleAddNew = () => {}

  const handleGetContainers = async () => {
    const response = await getContainersAdmin()
    setContainersList(response)
  }

  // get containers on mount
  useEffect(() => {
    handleGetContainers()
  }, [])

  // set filtered container list when containers list is set
  useEffect(() => {
    containersList && setFilteredContainersList(containersList)
  }, [containersList])

  // filter containers list with search query
  useEffect(() => {
    setFilteredContainersList(
      containersList?.filter((item) => item.trackingUrl.includes(searchQuery))
    )
    //eslint-disable-next-line
  }, [searchQuery])

  return (
    <BindContainerFrame>
      <Label>{t('choose from list')}</Label>

      <SearchFrame>
        <SearchComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder={t('search for container')}
        />
        <ContainersListBox
          containersList={filteredContainersList}
          setContainerToBind={setContainerToBind}
          setIsOpen={setIsOpen}
        />
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
