import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdownFilter from '@/common/components/appDropdown/appFilter/AppDropDownFilter'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import { ShippingStatus } from '@/common/helpers/constants'

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
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  const onClearFilter = (e: any) => {
    e.stopPropagation()
    setShippingStatus(null)
    setDealerId(null)
    setReceiverId(null)
  }

  return (
    <AppDropdownFilter
      setShippingStatus={setShippingStatus}
      setDealerId={setDealerId}
      setReceiverId={setReceiverId}
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
