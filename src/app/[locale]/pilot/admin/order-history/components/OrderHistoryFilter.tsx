import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/pilot/theme'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdownFilter from '@/common/components/appDropdown/appDropdownFilter/AppDropDownFilter'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'
import { ShippingStatus } from '@/common/helpers/constants'

import filterIconBlack from '@/assets/icons/filterBlack.svg'

const BUTTON_WIDTH_ON_MOBILE = 160

type Props = {
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  dealerId?: number
  setDealerId: (arg: number | undefined) => void
  receiverId?: number
  setReceiverId: (arg: number | undefined) => void
  isDisabled?: boolean
}

const OrderHistoryFilter = ({
  shippingStatus,
  setShippingStatus,
  dealerId,
  setDealerId,
  receiverId,
  setReceiverId,
  isDisabled,
}: Props) => {
  const [checkedShippingStatus, setCheckedShippingStatus] =
    useState<ShippingStatus>(null)
  const [checkedDealerId, setCheckedDealerId] = useState<number>()
  const [checkedRecipientId, setCheckedRecipientId] = useState<number>()

  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    clearFilterStates()
  }

  const clearFilterStates = () => {
    setShippingStatus(null)
    setDealerId(undefined)
    setReceiverId(undefined)

    setCheckedShippingStatus(null)
    setCheckedDealerId(undefined)
    setCheckedRecipientId(undefined)
  }

  return (
    <AppDropdownFilter
      setShippingStatus={setShippingStatus}
      setDealerId={setDealerId}
      setReceiverId={setReceiverId}
      checkedShippingStatus={checkedShippingStatus}
      setCheckedShippingStatus={setCheckedShippingStatus}
      checkedRecipientId={checkedRecipientId}
      setCheckedRecipientId={setCheckedRecipientId}
      checkedDealerId={checkedDealerId}
      setCheckedDealerId={setCheckedDealerId}
      isWithDealer={true}
      clearFilterStates={clearFilterStates}
    >
      <SecondaryButton
        text={t('filter')}
        onClick={() => {}}
        icon={filterIconBlack}
        width={isMobile ? BUTTON_WIDTH_ON_MOBILE : undefined}
        isDisabled={isDisabled}
      ></SecondaryButton>
      {(shippingStatus || dealerId || receiverId) && (
        <CloseIconBlack onClick={onClearFilter} top={-8} right={-8} />
      )}
    </AppDropdownFilter>
  )
}

export default OrderHistoryFilter
