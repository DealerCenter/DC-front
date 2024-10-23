import React, { useState } from 'react'
import Box from '../../../../components/common/Box'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/InputElements/TextInput'
import BasicButton from '@/common/components/appButton/BasicButton'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import checkedEmpty from '@/assets/icons/checkedIconEmpty.svg'
import editIcon from '@/assets/icons/editPencil.svg'
import addPersonIcon from '@/assets/icons/addPersonBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = { header: string; fullName: string; value: string }

const UserDataBox = ({ header, fullName, value }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const [isEditing, setIsEditing] = useState(false)

  const t = useTranslations('')

  return (
    <Box>
      <HeaderFrame>
        <Header>{t(header)}</Header>
        {isMobile && isEditing && (
          <Icon onClick={() => setIsEditing(false)}>
            <Image src={checkedEmpty} alt='checked icon' />
          </Icon>
        )}
      </HeaderFrame>
      <Line />
      {fullName === '' ? (
        <AddPersonFrame>
          <Image src={addPersonIcon} alt='add person icon' />
          <Value>{t('not added recipient data')}</Value>
          <BasicButton onClick={() => {}}>{t('add recipient')}</BasicButton>
        </AddPersonFrame>
      ) : (
        <>
          {isEditing ? (
            <DataFrame>
              <TextInput
                width={isMobile ? 160 : isTablet ? 156 : 180}
                height={48}
                type='text'
                name='full name'
                placeholder={t('full name')}
                value={''}
                onChange={() => {}}
                onBlur={() => {}}
                fontWeight='bold'
                fontSize={13}
                isOutline={false}
              />
              <TextInput
                width={isMobile ? 143 : 160}
                height={48}
                type='text'
                name='mob number'
                placeholder={t('mob number')}
                value={''}
                onChange={() => {}}
                onBlur={() => {}}
                fontWeight='bold'
                fontSize={13}
                isOutline={false}
              />
              {!isMobile && (
                <Icon onClick={() => setIsEditing(false)}>
                  <Image src={checkedEmpty} alt='checked icon' />
                </Icon>
              )}
            </DataFrame>
          ) : (
            <DataFrame>
              <Name>{fullName}</Name>
              <Value>{value}</Value>
              <IconBox>
                <Icon>
                  <Image src={checkedGreen} alt='checked icon' />
                </Icon>
                <Icon onClick={() => setIsEditing(true)}>
                  <Image src={editIcon} alt='pencil icon' />
                </Icon>
              </IconBox>
            </DataFrame>
          )}
        </>
      )}
    </Box>
  )
}

export default UserDataBox

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Value = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddPersonFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
