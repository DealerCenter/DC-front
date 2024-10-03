import Image from 'next/image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

// import DeleteWarning from '../../DeleteWarning'
import AppModal from '@/common/components/modal/AppModal'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import dashedLine from '@/assets/icons/dashedLineGray.svg'
import { RECEIVER_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'
import { useTranslations } from 'next-intl'
import DeleteWarning from '@/common/components/deleteWarning/DeleteWarning'

type Props = {
  onClick: () => void
  receiverData: RECEIVER_DATA
}

const ListItemFullDropdown = ({
  onClick,
  receiverData: {
    id,
    personalId,
    firstName,
    lastName,
    phoneNumber,
    createdAt,
    verificationStatus,
  },
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = useTranslations('')

  return (
    <>
      <Container>
        <DottedLine>
          <Image src={dashedLine} alt='dashed line' />
        </DottedLine>
        <LabelBox>
          <Circle />
          <NameAndIdBox>
            <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
            <IdLabel>{personalId}</IdLabel>
          </NameAndIdBox>
        </LabelBox>
        <Label>{phoneNumber}</Label>
        <Label>{formatDate(createdAt)}</Label>
        <DebtLabel></DebtLabel>
        <IconBox>
          <Icon>
            {verificationStatus ? (
              <Image
                src={checkedGreen}
                alt='checked icon'
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={uncheckedRed}
                alt='unchecked icon'
                width={20}
                height={20}
              />
            )}
          </Icon>
          <Icon>
            <Image src={editPencil} alt='edit icon' onClick={onClick} />
          </Icon>
          <Icon>
            <Image
              src={trashCan}
              alt='trash icon'
              onClick={() => setIsModalOpen(true)}
            />
          </Icon>
        </IconBox>
      </Container>
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <DeleteWarning
          onCancel={() => setIsModalOpen(false)}
          onDelete={() => console.log('delete')}
          header={t('delete recipient')}
          text={t('delete data warning')}
        />
      </AppModal>
    </>
  )
}

export default ListItemFullDropdown

const DottedLine = styled.div`
  position: absolute;
  top: -27px;
  left: 30px;
`

const Circle = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors?.main_gray_16};
`

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 72px;
  padding: 0 16px 0 42px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 128px;
  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 13px;
`

const NameLabel = styled(Label)`
  font-weight: 700;
  justify-content: start;
  text-align: start;
`

const IdLabel = styled(Label)`
  align-items: start;
  justify-content: start;
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const NameAndIdBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

type DropdownIconProps = { isOpen: boolean }

const DropdownIcon = styled.div<DropdownIconProps>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}

  cursor: pointer;
`
