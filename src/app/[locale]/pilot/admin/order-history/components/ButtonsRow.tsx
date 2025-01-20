import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { CONTAINER_GET_RES } from '@/api/apiTypes'
import theme from '@/app/[locale]/pilot/theme'
import { routeName, ShippingStatus } from '@/common/helpers/constants'

import BasicButton from '@/common/components/appButton/BasicButton'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppSort from '@/common/components/appSort/AppSort'
import OrderHistoryBindContainer from './OrderHistoryBindContainer'
import OrderHistoryChangeStatus from './OrderHistoryChangeStatus'
import OrderHistoryFilter from './OrderHistoryFilter'

import checkIcon from '@/assets/icons/checkBoxIcons/checkWhite.svg'
import pencilIcon from '@/assets/icons/pencilFull.svg'
import addIcon from '@/assets/icons/plusInCircle.svg'

type Props = {
  isEditing: boolean
  setIsEditing: (arg1: boolean) => void
  setSortByCost: (arg: 'desc' | 'asc' | null) => void
  setSortByCreateDate: (arg: 'desc' | 'asc' | null) => void
  isButtonsDisabled: boolean
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  dealerId: number | undefined
  setDealerId: (arg: number | undefined) => void
  receiverId: number | undefined
  setReceiverId: (arg: number | undefined) => void
  shippingStatusOnEdit: string | null
  setShippingStatusOnEdit: (arg: string | null) => void
  handleEditSubmit: () => void
  containerToBind: CONTAINER_GET_RES | null
  setContainerToBind: (arg: CONTAINER_GET_RES | null) => void
  clearEdit: () => void
}

const ButtonsRow = ({
  isEditing,
  setIsEditing,
  setSortByCost,
  setSortByCreateDate,
  isButtonsDisabled,
  shippingStatus,
  setShippingStatus,
  dealerId,
  setDealerId,
  receiverId,
  setReceiverId,
  shippingStatusOnEdit,
  setShippingStatusOnEdit,
  handleEditSubmit,
  containerToBind,
  setContainerToBind,
  clearEdit,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  const onDoneEdit = () => {
    handleEditSubmit()
  }

  const handleEditButton = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true)
  }

  return (
    <>
      {isEditing ? (
        <ButtonFrameEdit>
          <ButtonPairFrame>
            <OrderHistoryChangeStatus
              shippingStatusOnEdit={shippingStatusOnEdit}
              setShippingStatusOnEdit={setShippingStatusOnEdit}
            />

            <OrderHistoryBindContainer
              containerToBind={containerToBind}
              setContainerToBind={setContainerToBind}
            />
          </ButtonPairFrame>
          <ButtonPairFrame>
            <BasicButton
              onClick={() => setIsEditing(false)}
              padding={16}
              color='white'
            >
              <ButtonText onClick={clearEdit}>{t('cancel')}</ButtonText>
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
            <OrderHistoryFilter
              shippingStatus={shippingStatus}
              setShippingStatus={setShippingStatus}
              dealerId={dealerId}
              setDealerId={setDealerId}
              receiverId={receiverId}
              setReceiverId={setReceiverId}
              isDisabled={isButtonsDisabled}
            />
            <AppSort
              setSortByCost={setSortByCost}
              setSortByDate={setSortByCreateDate}
              isDisabled={isButtonsDisabled}
            />
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
