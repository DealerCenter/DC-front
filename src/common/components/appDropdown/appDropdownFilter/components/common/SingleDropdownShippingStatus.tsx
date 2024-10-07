// import { ShippingStatus } from '@/common/helpers/constants'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import { SHIPPING_STATUS, ShippingStatus } from '@/common/helpers/constants'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

const statusValues: ShippingStatus[] = [
  SHIPPING_STATUS.IN_AUCTION,
  SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE,
  SHIPPING_STATUS.IN_CONTAINER,
  SHIPPING_STATUS.UNDERGOES_CUSTOMS,
  SHIPPING_STATUS.SENT,
]

type Props = {
  checkedShippingStatus: ShippingStatus
  setCheckedShippingStatus: (arg: ShippingStatus) => void
}

const SingleDropdownShippingStatus = ({
  checkedShippingStatus,
  setCheckedShippingStatus,
}: Props) => {
  const t = useTranslations('')

  const handleClick = (value: ShippingStatus) => {
    setCheckedShippingStatus(value)
  }

  return (
    <List>
      {statusValues.map((value, i) => (
        <ListItem
          key={`DropdownFilterBoxListItem${i}`}
          onClick={() => handleClick(value)}
        >
          <CheckBox isChecked={value === checkedShippingStatus} />
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
