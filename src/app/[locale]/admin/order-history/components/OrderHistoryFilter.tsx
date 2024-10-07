import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdownFilter from '@/common/components/appDropdown/filterStatusReceiverDealer/AppDropDownFilter'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import { ShippingStatus } from '@/common/helpers/constants'
import { useState } from 'react'

const BUTTON_WIDTH_ON_MOBILE = 160

type Props = {
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  setDealerId: (arg: number | null) => void
  setReceiverId: (arg: number | null) => void
  isDisabled?: boolean
}

const OrderHistoryFilter = ({
  shippingStatus,
  setShippingStatus,
  setDealerId,
  setReceiverId,
  isDisabled,
}: Props) => {
  const [checkedStatus, setCheckedStatus] = useState<ShippingStatus>(null)
  const [checkedDealerId, setCheckedDealerId] = useState<number | null>(null)
  const [checkedRecipientId, setCheckedRecipientId] = useState<number | null>(
    null
  )

  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    setShippingStatus(null)
    setDealerId(null)
    setReceiverId(null)

    setCheckedStatus(null)
    setCheckedDealerId(null)
    setCheckedRecipientId(null)
  }

  return (
    <AppDropdownFilter
      setShippingStatus={setShippingStatus}
      setDealerId={setDealerId}
      setReceiverId={setReceiverId}
      checkedStatus={checkedStatus}
      setCheckedStatus={setCheckedStatus}
      checkedRecipientId={checkedRecipientId}
      setCheckedRecipientId={setCheckedRecipientId}
      checkedDealerId={checkedDealerId}
      setCheckedDealerId={setCheckedDealerId}
    >
      <SecondaryButton
        text={t('filter')}
        onClick={() => {}}
        icon={filterIconBlack}
        width={isMobile ? BUTTON_WIDTH_ON_MOBILE : undefined}
        isDisabled={isDisabled}
      ></SecondaryButton>
      {shippingStatus !== null && (
        <CloseIconBlack onClick={onClearFilter} top={-8} right={-8} />
      )}
    </AppDropdownFilter>
  )
}

export default OrderHistoryFilter
