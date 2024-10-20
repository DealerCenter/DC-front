import React from 'react'
import styled from 'styled-components'

import editIcon from '@/assets/icons/editPencilWhite.svg'
import BasicButton from '@/common/components/appButton/BasicButton'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = { onClick: () => void }

const EditButton = ({ onClick }: Props) => {
  const t = useTranslations('')

  return (
    <BasicButton onClick={onClick} padding={16}>
      <ButtonIcon>
        <Image src={editIcon} alt='edit icon' width={15} />
      </ButtonIcon>
      <ButtonText>{t('edit')}</ButtonText>
    </BasicButton>
  )
}

export default EditButton

const ButtonIcon = styled.label`
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ButtonText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  cursor: pointer;
  user-select: none;
`
