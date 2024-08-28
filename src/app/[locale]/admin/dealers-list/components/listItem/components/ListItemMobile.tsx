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

type Props = {
  fullName: string
  id: string
  mobile: string
  dateOfAddition: string
  isVerified: boolean
  onClick: () => void
}

const ListItemMobile = ({
  fullName,
  id,
  mobile,
  dateOfAddition,
  isVerified,
  onClick,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <NameAndDebtBox>
          <NameLabel onClick={onClick}>{fullName}</NameLabel>
          <IconAndDebtBox>
            <Icon>
              {isVerified ? (
                <Image src={checkedGreen} alt='checked icon' />
              ) : (
                <Image src={uncheckedRed} alt='unchecked icon' />
              )}
            </Icon>
            <DebtLabel>{`$ 5750`}</DebtLabel>
          </IconAndDebtBox>
        </NameAndDebtBox>
        <IconAndLabelBox>
          <Image src={calendarIcon} alt='calendar icon' />
          <Label>
            {t('added')} {dateOfAddition}
          </Label>
        </IconAndLabelBox>
      </TopFrame>
      <DetailsFrame>
        <LabelValuePair label={t('personal number')} value={id} />
        <LabelValuePair label={t('mobile')} value={mobile} />
        <LabelValuePair label={t('num of cars')} value={'15'} />
      </DetailsFrame>
      <DropdownBox>
        <DropdownArrow onClick={() => setIsDropdownOpen((is) => !is)}>
          <Image src={downArrowGray} alt='down arrow' />
        </DropdownArrow>
        <TextBold16Gray>{t('see all recipients')}</TextBold16Gray>
      </DropdownBox>
      {isDropdownOpen && (
        <ListItemMobileDropdown
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
          onClick={() => {}}
        />
      )}
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
