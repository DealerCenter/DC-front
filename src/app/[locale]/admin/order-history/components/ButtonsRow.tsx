import React, { useEffect, useState } from 'react'
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
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import BindContainerBox from './bindContainer/BindContainerBox'
import {
  routeName,
  SHIPPING_STATUS,
  ShippingStatus,
} from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'
import AppDropdownBasic from '@/common/components/appDropdown/AppDropdownBasic'

const changeStatusList = [
  { label: SHIPPING_STATUS.IN_AUCTION },
  { label: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE },
  { label: SHIPPING_STATUS.IN_CONTAINER },
  { label: SHIPPING_STATUS.UNDERGOES_CUSTOMS },
  { label: SHIPPING_STATUS.SENT },
]

type Props = {
  isEditing: boolean
  setIsEditing: (arg1: boolean) => void
  setSortByCost: (arg: 'desc' | 'asc' | null) => void
  setSortByCreateDate: (arg: 'desc' | 'asc' | null) => void
  isButtonsDisabled: boolean
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  setDealerId: (arg: number | null) => void
  setReceiverId: (arg: number | null) => void
  clearOrderIdsList: () => void
  shippingStatusOnEdit: string | null
  setShippingStatusOnEdit: (arg: string | null) => void
  handleEditSubmit: () => void
}

const ButtonsRow = ({
  isEditing,
  setIsEditing,
  setSortByCost,
  setSortByCreateDate,
  isButtonsDisabled,
  shippingStatus,
  setShippingStatus,
  setDealerId,
  setReceiverId,
  clearOrderIdsList,
  shippingStatusOnEdit,
  setShippingStatusOnEdit,
  handleEditSubmit,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  const [activeSortLabel, setActiveSortLabel] = useState('sort')

  const sortOptions = [
    {
      label: 'date descending',
      icon: arrowDown,
      onChoose: () => setSortByCreateDate('desc'),
    },
    {
      label: 'date ascending',
      icon: arrowUp,
      onChoose: () => setSortByCreateDate('asc'),
    },
    {
      label: 'price descending',
      icon: arrowDown,
      onChoose: () => setSortByCost('desc'),
    },
    {
      label: 'price ascending',
      icon: arrowUp,
      onChoose: () => setSortByCost('asc'),
    },
  ]

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    setShippingStatus(null)
    setDealerId(null)
    setReceiverId(null)
  }

  const onClearSort = (e: any) => {
    e.stopPropagation()
    setSortByCost(null)
    setSortByCreateDate(null)
    setActiveSortLabel('sort')
  }

  const onClearShippingStatusOnEdit = (e: any) => {
    e.stopPropagation()
    setShippingStatusOnEdit(null)
  }

  const onDoneEdit = () => {
    handleEditSubmit()
  }

  useEffect(() => {
    console.log('shipping status', shippingStatusOnEdit)
  }, [shippingStatusOnEdit])

  const handleEditButton = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true)
  }

  return (
    <>
      {isEditing ? (
        <ButtonFrameEdit>
          <ButtonPairFrame>
            <AppDropdownBasic
              items={changeStatusList}
              modalStyle='white'
              width={300}
              top={48}
              isBorder={true}
              setActiveValue={setShippingStatusOnEdit}
            >
              <BasicButton onClick={() => {}} color='white' isBorder={true}>
                {t(
                  shippingStatusOnEdit
                    ? `${shippingStatusOnEdit}`
                    : 'change status'
                )}
              </BasicButton>
              {shippingStatusOnEdit !== null && (
                <CloseIconBlack
                  onClick={onClearShippingStatusOnEdit}
                  top={-8}
                  right={-8}
                />
              )}
            </AppDropdownBasic>
            <AppDropdown
              ReadyComponent={<BindContainerBox />}
              modalStyle='white'
              top={48}
              isBorder={true}
              isNoActionOnClick={true}
              handleClose={() => {}}
            >
              <BasicButton onClick={() => {}} color='white' isBorder={true}>
                {t('bind container')}
              </BasicButton>
            </AppDropdown>
          </ButtonPairFrame>
          <ButtonPairFrame>
            <BasicButton
              onClick={() => setIsEditing(false)}
              padding={16}
              color='white'
            >
              <ButtonText onClick={clearOrderIdsList}>{t('cancel')}</ButtonText>
            </BasicButton>
            <BasicButton onClick={() => setIsEditing(false)} padding={16}>
              <ButtonIcon>
                <Image src={checkIcon} alt='check icon' width={15} />
              </ButtonIcon>
              <ButtonText onClick={onDoneEdit}>{t('done')}</ButtonText>
            </BasicButton>
          </ButtonPairFrame>
        </ButtonFrameEdit>
      ) : (
        <ButtonFrame>
          <ButtonPairFrame>
            <AppDropdownFilter
              setShippingStatus={setShippingStatus}
              setDealerId={setDealerId}
              setReceiverId={setReceiverId}
            >
              <SecondaryButton
                text={t('filter')}
                onClick={() => {}}
                icon={filterIconBlack}
                width={isMobile ? 160 : undefined}
                isDisabled={isButtonsDisabled}
              ></SecondaryButton>
              {shippingStatus !== null && (
                <CloseIconBlack onClick={onClearFilter} top={-8} right={-8} />
              )}
            </AppDropdownFilter>
            <AppDropdown
              // items={sortOptions}
              modalStyle='white'
              onSortClick={() => {}}
              sortOptions={sortOptions}
              setActiveLabel={setActiveSortLabel}
              isDisabled={isButtonsDisabled}

              // onCancel={onClearSort}
            >
              <SecondaryButton
                text={t(activeSortLabel)}
                onClick={() => {}}
                icon={sortIconBlack}
                width={isMobile ? 160 : undefined}
                isDisabled={isButtonsDisabled}
              />
              {activeSortLabel !== 'sort' && (
                <CloseIconBlack onClick={onClearSort} top={-8} right={-8} />
              )}
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
              isDisabled={isButtonsDisabled}
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
  justify-content: space-between;

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
