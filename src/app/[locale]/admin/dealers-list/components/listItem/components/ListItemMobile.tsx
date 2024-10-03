import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import LabelValuePair from './LabelValuePair'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import downArrowGray from '@/assets/icons/downArrowGray.svg'
import ListItemMobileDropdown from './ListItemMobileDropdown'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'

type Props = {
  onClick: () => void
  userData: DEALERS_DATA
  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
  isDisabled?: boolean
  onDeleteDealer: (orderId: number) => void
}

const ListItemMobile = ({
  onClick,
  userData: {
    id,
    personalId,
    firstName,
    lastName,
    createdAt,
    phoneNumber,
    idImageVerificationStatus,
    receivers,
  },
  isDropdownOpen,
  setIsDropdownOpen,
  isDisabled,
  onDeleteDealer,
}: Props) => {
  const t = useTranslations('')

  const handleDropdown = (e: any) => {
    e.stopPropagation()
    if (receivers?.length === 0) return

    !isDisabled && setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <Container>
      <TopFrame>
        <NameAndDebtBox>
          <NameLabel
            onClick={isDisabled ? () => {} : onClick}
          >{`${firstName} ${lastName}`}</NameLabel>
          <IconAndDebtBox>
            <Icon>
              <VerificationIcon
                verificationStatus={idImageVerificationStatus}
              />
            </Icon>
            <DebtLabel>{`$ 5750`}</DebtLabel>
          </IconAndDebtBox>
        </NameAndDebtBox>
        <IconAndLabelBox>
          <Image src={calendarIcon} alt='calendar icon' />
          <Label>
            {t('added')} {formatDate(createdAt)}
          </Label>
        </IconAndLabelBox>
      </TopFrame>
      <DetailsFrame>
        <LabelValuePair label={t('personal number')} value={personalId} />
        <LabelValuePair label={t('mobile')} value={phoneNumber} />
        <LabelValuePair label={t('num of cars')} value={'15'} />
      </DetailsFrame>
      <DropdownBox>
        <DropdownArrow onClick={handleDropdown}>
          <Image src={downArrowGray} alt='down arrow' />
        </DropdownArrow>
        <TextBold16Gray>{t('see all recipients')}</TextBold16Gray>
      </DropdownBox>
      {isDropdownOpen && <></>}
      {isDropdownOpen &&
        receivers &&
        receivers.map((receiver, i) => (
          <ListItemMobileDropdown
            key={`listItemFullDropdown${receiver.personalId}`}
            onClick={() => {}}
            receiverData={receiver}
          />
        ))}
    </Container>
  )
}

export default ListItemMobile

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  flex: 1;
  gap: 16px;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NameAndDebtBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IconAndDebtBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const IconAndLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 20px;
  gap: 8px;
`

const NameLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: start;
  font-weight: 700;
  font-size: 16px;

  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 14px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  padding: 8px;
`

const DropdownBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 44px;
`

const DropdownArrow = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextBold16Gray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
  display: flex;
  justify-content: center;
  align-items: center;
`
