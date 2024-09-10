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
import AppDropdownFilter from '@/common/components/appDropdown/appFilter/AppDropDownFilter'
import { useAdminState } from '../../AdminStateContext'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { css } from 'styled-components'
import { routeName } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'

type Props = { isEditing: boolean; setIsEditing: (arg1: boolean) => void }

const sortOptions = [
  { label: 'date descending', icon: arrowDown },
  { label: 'date ascending', icon: arrowUp },
  { label: 'price descending', icon: arrowDown },
  { label: 'price ascending', icon: arrowUp },
]

const filterValues = {
  status: ['arrived', 'onTheWay', 'inWarehouse'],
  recipient: [
    'Luka Tsilosani',
    'Ani Kviciani',
    'Zuka Jakeli',
    'Luka Tsilosani',
    'Ani Kviciani',
    'Zuka Jakeli',
  ],
  dealer: [
    'Ani Kviciani',
    'Ani Kviciani',
    'Zuka Jakeli',
    'Zuka Jakeli',
    'Luka Tsilosani',
    'Luka Tsilosani',
  ],
}

const ButtonsRow = ({ isEditing, setIsEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  const { setSortOption } = useAdminState()

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
            <AppDropdownFilter values={filterValues}>
              <SecondaryButton
                text={t('filter')}
                onClick={() => {}}
                icon={filterIconBlack}
                width={isMobile ? 160 : undefined}
              ></SecondaryButton>
            </AppDropdownFilter>
            <AppDropdown
              items={sortOptions}
              modalStyle='white'
              onSortClick={setSortOption}
            >
              <SecondaryButton
                text={t('sort')}
                onClick={() => {}}
                icon={sortIconBlack}
                width={isMobile ? 160 : undefined}
              ></SecondaryButton>
            </AppDropdown>
          </ButtonPairFrame>
          <ButtonPairFrame>
            <SecondaryButton
              text={t('add')}
              onClick={() => router.push(routeName.adminCreateOrder)}
              icon={addIcon}
              width={isMobile ? 160 : undefined}
            ></SecondaryButton>
            <SecondaryButton
              text={t('edit')}
              onClick={handleEditButton}
              icon={pencilIcon}
              width={isMobile ? 160 : undefined}
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
  justify-content: space-between;
  padding: 0 32px;
  flex-direction: row;
  gap: unset;
  height: unset;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0;
    flex-direction: column;
    gap: 8px;
    height: 96px;
  }
`

const ButtonFrameEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 32px;
  height: unset;
  align-items: unset;

  @media ${({ theme }) => theme.media?.sm} {
    align-items: flex-end;
    padding: 0;
    height: 96px;
  }
`

const ButtonPairFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: unset;
  gap: 10px;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 4px;
    justify-content: space-between;
  }
`

const ButtonText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
`

const ButtonIcon = styled.label`
  margin-right: 12px;
`
