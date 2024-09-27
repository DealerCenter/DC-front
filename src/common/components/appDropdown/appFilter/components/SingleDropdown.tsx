// import { ShippingStatus } from '@/common/helpers/constants'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {
  values: string[]
  checkedOption: string
  setCheckedOption: (arg: string) => void
}

const SingleDropdown = ({ values, checkedOption, setCheckedOption }: Props) => {
  const t = useTranslations('')

  return (
    <List>
      {values.map((value, i) => (
        <ListItem
          key={`DropdownFilterBoxListItem${i}`}
          onClick={() => setCheckedOption(value)}
        >
          <CheckBox isChecked={value === checkedOption} />
          {!values ? <Text>{t(value)}</Text> : <Text>{value}</Text>}
        </ListItem>
      ))}
    </List>
  )
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
