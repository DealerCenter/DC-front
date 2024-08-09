import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import BasicButton from '@/common/components/appButton/BasicButton'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdown from '@/common/components/appDropdown/AppDropdown'

import addIcon from '@/assets/icons/plusInCircle.svg'
import pencilIcon from '@/assets/icons/pencilFull.svg'
import checkIcon from '@/assets/icons/checkBoxIcons/checkWhite.svg'
import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import arrowDown from '@/assets/icons/sortArrows/arrowSortDown.svg'
import arrowUp from '@/assets/icons/sortArrows/arrowSortUp.svg'

type Props = { isEditing: boolean; setIsEditing: (arg1: boolean) => void }

const sortOptions = [
  { label: 'date descending', icon: arrowDown },
  { label: 'date ascending', icon: arrowUp },
  { label: 'price descending', icon: arrowDown },
  { label: 'price ascending', icon: arrowUp },
]

const ButtonsRow = ({ isEditing, setIsEditing }: Props) => {
  const t = useTranslations('')

  const handleEditButton = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true)
  }

  return (
    <>
      {isEditing ? (
        <ButtonFrameEdit>
          <ButtonPairFrame>
            <BasicButton
              onClick={() => setIsEditing(false)}
              padding={16}
              color='white'
            >
              <ButtonText>{t('cancel')}</ButtonText>
            </BasicButton>
            <BasicButton onClick={() => setIsEditing(false)} padding={16}>
              <ButtonIcon>
                <Image src={checkIcon} alt='check icon' width={15} />
              </ButtonIcon>
              <ButtonText>{t('done')}</ButtonText>
            </BasicButton>
          </ButtonPairFrame>
        </ButtonFrameEdit>
      ) : (
        <ButtonFrame>
          <ButtonPairFrame>
            <SecondaryButton
              text={t('filter')}
              onClick={() => {}}
              icon={filterIconBlack}
            ></SecondaryButton>
            <AppDropdown items={sortOptions} modalStyle='white'>
              <SecondaryButton
                text={t('sort')}
                onClick={() => {}}
                icon={sortIconBlack}
              ></SecondaryButton>
            </AppDropdown>
          </ButtonPairFrame>
          <ButtonPairFrame>
            <SecondaryButton
              text={t('add')}
              onClick={() => {}}
              icon={addIcon}
            ></SecondaryButton>
            <SecondaryButton
              text={t('edit')}
              onClick={handleEditButton}
              icon={pencilIcon}
            ></SecondaryButton>
          </ButtonPairFrame>
        </ButtonFrame>
      )}
    </>
  )
}

export default ButtonsRow

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0;
  }
`

const ButtonFrameEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 32px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0;
  }
`

const ButtonPairFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const ButtonText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
`

const ButtonIcon = styled.label`
  margin-right: 12px;
`
