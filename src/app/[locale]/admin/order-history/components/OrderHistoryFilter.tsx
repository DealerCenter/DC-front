import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdownFilter from '@/common/components/appDropdown/appDropdownFilter/AppDropDownFilter'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'
import { ShippingStatus } from '@/common/helpers/constants'

import filterIconBlack from '@/assets/icons/filterBlack.svg'

const BUTTON_WIDTH_ON_MOBILE = 160

type Props = {
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  dealerId: number | null
  setDealerId: (arg: number | null) => void
  receiverId: number | null
  setReceiverId: (arg: number | null) => void
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
  const [checkedDealerId, setCheckedDealerId] = useState<number | null>(null)
  const [checkedRecipientId, setCheckedRecipientId] = useState<number | null>(
    null
  )

  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    clearFilterStates()
  }

  const clearFilterStates = () => {
    setShippingStatus(null)
    setDealerId(null)
    setReceiverId(null)

    setCheckedShippingStatus(null)
    setCheckedDealerId(null)
    setCheckedRecipientId(null)
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
