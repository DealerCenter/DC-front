import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import { ShippingStatus } from '@/common/helpers/constants'
import { useState } from 'react'
import AppDropdownFilter from '@/common/components/appDropdown/appDropdownFilter/AppDropDownFilter'

const BUTTON_WIDTH_ON_MOBILE = 160

type Props = {
  shippingStatus: ShippingStatus
  setShippingStatus: (arg: ShippingStatus) => void
  receiverId: number | null
  setReceiverId: (arg: number | null) => void
  isDisabled?: boolean
}

const OrderHistoryFilter = ({
  shippingStatus,
  setShippingStatus,
  receiverId,
  setReceiverId,
  isDisabled,
}: Props) => {
  const [checkedStatus, setCheckedStatus] = useState<ShippingStatus>(null)
  const [checkedRecipientId, setCheckedRecipientId] = useState<number | null>(
    null
  )

  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    setShippingStatus(null)
    setReceiverId(null)

    setCheckedStatus(null)
    setCheckedRecipientId(null)
  }

  return (
    <AppDropdownFilter
      setShippingStatus={setShippingStatus}
      setReceiverId={setReceiverId}
      checkedStatus={checkedStatus}
      setCheckedStatus={setCheckedStatus}
      checkedRecipientId={checkedRecipientId}
      setCheckedRecipientId={setCheckedRecipientId}
      checkedDealerId={null}
      setCheckedDealerId={() => {}}
      setDealerId={() => {}}
    >
      <SecondaryButton
        text={t('filter')}
        onClick={() => {}}
        icon={filterIconBlack}
        width={isMobile ? BUTTON_WIDTH_ON_MOBILE : undefined}
        isDisabled={isDisabled}
      ></SecondaryButton>
      {(shippingStatus || receiverId) && (
        <CloseIconBlack onClick={onClearFilter} top={-8} right={-8} />
      )}
    </AppDropdownFilter>
  )
}

export default OrderHistoryFilter
