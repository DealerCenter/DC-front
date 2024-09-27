// import { ShippingStatus } from '@/common/helpers/constants'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import { ShippingStatus } from '@/common/helpers/constants'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

const statusValues: ShippingStatus[] = [
  'InAuction',
  'InAmericanWarehouse',
  'InContainer',
  'UndergoesCustomsProcedures',
  'Sent',
]

type Props = {
  checkedStatus: ShippingStatus
  setCheckedStatus: (arg: ShippingStatus) => void
}

const SingleDropdownShippingStatus = ({
  checkedStatus,
  setCheckedStatus,
}: Props) => {
  const t = useTranslations('')

  return (
    <List>
      {statusValues.map((value, i) => (
        <ListItem
          key={`DropdownFilterBoxListItem${i}`}
          onClick={() => setCheckedStatus(value)}
        >
          <CheckBox isChecked={value === checkedStatus} />
          <Text>{t(value)}</Text>
        </ListItem>
      ))}
    </List>
  )
}

export default SingleDropdownShippingStatus

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
