// import { ShippingStatus } from '@/common/helpers/constants'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import SearchSmall from '@/common/components/search/SearchSmall'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  values?: { id: number; firstName: string; lastName: string }[]
  checkedOption: string | number | null
  setCheckedId: (arg: number | null) => void
  searchQuery: string
  setSearchQuery: (arg: string) => void
}

const SingleDropdown = ({
  values,
  checkedOption,
  setCheckedId,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const t = useTranslations('')

  if (values) {
    return (
      <List>
        <SearchBox>
          <SearchSmall
            placeholder={t('search')}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </SearchBox>
        {values.map((value, i) => (
          <ListItem
            key={`DropdownFilterBoxListItem${i}`}
            onClick={() => setCheckedId(value.id)}
          >
            <CheckBox isChecked={value.id === checkedOption} />
            <Text>{`${value.firstName} ${value.lastName}`}</Text>
          </ListItem>
        ))}
      </List>
    )
  }
  return <List></List>
}

export default SingleDropdown

const List = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  list-style: none;
  padding: 8px;
  gap: 16px;
  border-radius: 8px;

  transition: all 100ms ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
`

const SearchBox = styled.div`
  padding: 10px 8px;
`
