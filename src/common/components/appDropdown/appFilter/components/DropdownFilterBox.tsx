import { useTranslations } from 'next-intl'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import OptionsBox from './OptionsBox'
// import CheckBox from '@/common/components/checkBox/CheckBox'
import BasicButton from '@/common/components/appButton/BasicButton'
import CheckBox from '@/common/components/appCheckBox/Checkbox'

type Props = {
  values: { status: string[]; recipient: string[]; dealer: string[] }
  toggleDropdown: () => void
}

const DropdownFilterBox = ({ values, toggleDropdown }: Props) => {
  const t = useTranslations('')

  const { status, recipient, dealer } = values

  const [checkedOption, setCheckedOption] = useState()

  const handleCancel = () => {
    toggleDropdown()
  }
  const handleSave = () => {
    toggleDropdown()
  }

  const updateShipmentStatus = (status: string) => {}

  return (
    <Container>
      {/* <Frame>
        <OptionsBox
          activeOption={activeSetting}
          setActiveOption={setActiveSetting}
        />
        <List>
          {value.map((value, i) => (
            <ListItem
              key={`DropdownFilterBoxListItem${i}`}
              onClick={() => updateShipmentStatus(value)}
            >
              <CheckBox isChecked={value === checkedOption} />
              <Text>
                {t(
                  value === 'inWarehouse'
                    ? 'in warehouse'
                    : value === 'onTheWay'
                      ? 'on the way'
                      : value === 'arrived' && 'arrived'
                )}
              </Text>
            </ListItem>
          ))}
        </List>
      </Frame> */}
      <CancelSaveBox>
        <BasicButton
          onClick={handleCancel}
          height={36}
          width={157}
          color='white'
          isBorder={true}
        >
          <TextBold>{t('cancel')}</TextBold>
        </BasicButton>
        <BasicButton onClick={handleSave} height={36} width={157} color='black'>
          <TextBold>{t('save')}</TextBold>
        </BasicButton>
      </CancelSaveBox>
    </Container>
  )
}

export default DropdownFilterBox

const Container = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

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

const CancelSaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  text-align: center;
  justify-self: center;
  text-align: center;
  cursor: pointer;
`
