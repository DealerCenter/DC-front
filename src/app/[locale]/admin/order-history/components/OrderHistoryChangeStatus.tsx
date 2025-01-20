import { useTranslations } from 'next-intl'

import BasicButton from '@/common/components/appButton/BasicButton'
import AppDropdownBasic from '@/common/components/appDropdown/AppDropdownBasic'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'
import { SHIPPING_STATUS } from '@/common/helpers/constants'

const changeStatusList = [
  { label: SHIPPING_STATUS.IN_AUCTION },
  { label: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE },
  { label: SHIPPING_STATUS.IN_CONTAINER },
  { label: SHIPPING_STATUS.UNDERGOES_CUSTOMS },
  { label: SHIPPING_STATUS.SENT },
]

type Props = {
  shippingStatusOnEdit: string | null
  setShippingStatusOnEdit: (arg: string | null) => void
}

const OrderHistoryChangeStatus = ({
  shippingStatusOnEdit,
  setShippingStatusOnEdit,
}: Props) => {
  const t = useTranslations('')

  const onClearShippingStatusOnEdit = (e: any) => {
    e.stopPropagation()
    setShippingStatusOnEdit(null)
  }

  return (
    <AppDropdownBasic
      items={changeStatusList}
      modalStyle='white'
      width={300}
      top={48}
      isBorder={true}
      setActiveValue={setShippingStatusOnEdit}
    >
      <BasicButton onClick={() => {}} color='white' isBorder={true}>
        {t(shippingStatusOnEdit ? shippingStatusOnEdit : 'change status')}
      </BasicButton>
      {shippingStatusOnEdit !== null && (
        <CloseIconBlack
          onClick={onClearShippingStatusOnEdit}
          top={-8}
          right={-8}
        />
      )}
    </AppDropdownBasic>
  )
}

export default OrderHistoryChangeStatus
