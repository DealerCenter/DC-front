import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Image from 'next/image'
import OptionsBox from './OptionsBox'
import CheckBox from '@/common/components/checkbox/CheckBox'
import BasicButton from '@/common/components/appButton/BasicButton'

type Props = {
  values: { status: string[]; recipient: string[]; dealer: string[] }
  toggleDropdown: () => void
}

const DropdownFilterBox = ({ values, toggleDropdown }: Props) => {
  const [activeOption, setActiveOption] = useState<
    'status' | 'recipient' | 'dealer'
  >('status')
  const [activeOptionStatus, setActiveOptionStatus] = useState(0)
  const [activeOptionRecipient, setActiveOptionRecipient] = useState(0)
  const [activeOptionDealer, setActiveOptionDealer] = useState(0)

  const t = useTranslations('')

  const { status, recipient, dealer } = values

  const currentList = () => {
    switch (activeOption) {
      case 'status':
        return {
          value: status,
          activeOption: activeOptionStatus,
          setActiveOption: setActiveOptionStatus,
        }
      case 'recipient':
        return {
          value: recipient,
          activeOption: activeOptionRecipient,
          setActiveOption: setActiveOptionRecipient,
        }
      case 'dealer':
        return {
          value: dealer,
          activeOption: activeOptionDealer,
          setActiveOption: setActiveOptionDealer,
        }
      default:
        return {
          value: status,
          activeOption: activeOptionStatus,
          setActiveOption: setActiveOptionStatus,
        }
    }
  }

  const handleCancel = () => {
    toggleDropdown()
  }
  const handleSave = () => {
    // toggleDropdown()
  }

  return (
    <Container>
      <Frame>
        <OptionsBox
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <List>
          {currentList().value.map((value, i) => (
            <ListItem
              key={`DropdownFilterBoxListItem${i}`}
              onClick={() => currentList().setActiveOption(i)}
            >
              <CheckBox isChecked={i === currentList().activeOption} />
              <Text>{value}</Text>
            </ListItem>
          ))}
        </List>
      </Frame>
      <CancelSaveBox>
        <BasicButton
          onClick={handleCancel}
          height={36}
          width={157}
          color='white'
        >
          <TextBold>{t('cancel')}</TextBold>
        </BasicButton>
        <BasicButton onClick={() => {}} height={36} width={157} color='black'>
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
