import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import BasicButton from '@/common/components/appButton/BasicButton'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import OptionsBox from './OptionsBox'
import { ShippingStatus } from '@/common/helpers/constants'
import SingleDropdown from './SingleDropdown'
import SingleDropdownShippingStatus from './SingleDropdownShippingStatus'
import { getDealersAdmin, getReceivers } from '@/api/apiCalls'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'

type Props = {
  toggleDropdown: () => void
  setShippingStatus: (arg: ShippingStatus) => void
  setDealerId: (arg: number | null) => void
  setReceiverId: (arg: number | null) => void
}

const DropdownFilterBox = ({
  toggleDropdown,
  setShippingStatus,
  setDealerId,
  setReceiverId,
}: Props) => {
  const t = useTranslations('')
  const [activeSetting, setActiveSetting] = useState<
    'status' | 'recipient' | 'dealer' | null
  >('status')

  // const [checkedOption, setCheckedOption] = useState('')

  const [checkedStatus, setCheckedStatus] = useState<ShippingStatus>(null)
  const [checkedRecipientId, setCheckedRecipientId] = useState<number | null>(
    null
  )
  const [checkedDealerId, setCheckedDealerId] = useState<number | null>(null)

  const [receiversList, setReceiversList] = useState<RECEIVER_DATA[]>()
  const [receiversSearchQuery, setReceiversSearchQuery] = useState('')

  const [dealersList, setDealersList] = useState<DEALERS_DATA[]>()
  const [dealersSearchQuery, setDealersSearchQuery] = useState('')

  const handleCancel = () => {
    setCheckedStatus(null)
    setCheckedRecipientId(null)
    setCheckedDealerId(null)
    setShippingStatus(null)
    toggleDropdown()
  }
  const handleSave = () => {
    setShippingStatus(checkedStatus)
    setDealerId(checkedDealerId)
    setReceiverId(checkedRecipientId)
    toggleDropdown()
  }

  const getRecipients = async () => {
    const res = await getReceivers({ search: '' }, true)
    res && setReceiversList(res.data)
  }
  useEffect(() => {
    getRecipients()
  }, [receiversSearchQuery])

  const getDealers = async () => {
    const res = await getDealersAdmin({})
    res && setDealersList(res.data)
  }
  useEffect(() => {
    getDealers()
  }, [])

  return (
    <Container>
      <Frame>
        <OptionsBox
          activeOption={activeSetting}
          setActiveOption={setActiveSetting}
        />
        {activeSetting === 'status' ? (
          <SingleDropdownShippingStatus
            checkedStatus={checkedStatus}
            setCheckedStatus={setCheckedStatus}
          />
        ) : activeSetting === 'recipient' ? (
          <SingleDropdown
            checkedOption={checkedRecipientId}
            setCheckedId={setCheckedRecipientId}
            values={
              receiversList &&
              receiversList.map(({ id, firstName, lastName }) => ({
                id,
                firstName,
                lastName,
              }))
            }
            searchQuery={receiversSearchQuery}
            setSearchQuery={setReceiversSearchQuery}
          />
        ) : (
          activeSetting === 'dealer' && (
            <SingleDropdown
              values={
                dealersList &&
                dealersList.map(({ id, firstName, lastName }) => ({
                  id,
                  firstName,
                  lastName,
                }))
              }
              checkedOption={checkedDealerId}
              setCheckedId={setCheckedDealerId}
              searchQuery={dealersSearchQuery}
              setSearchQuery={setDealersSearchQuery}
            />
          )
        )}
      </Frame>
      <CancelSaveBox>
        <BasicButton
          onClick={handleCancel}
          height={36}
          width={157}
          color='white'
          isBorder={true}
        >
          <TextBold>{t('cancel')}</TextBold>
        </BasicButton>
        <BasicButton onClick={handleSave} height={36} width={157} color='black'>
          <TextBold>{t('save')}</TextBold>
        </BasicButton>
      </CancelSaveBox>
    </Container>
  )
}

export default DropdownFilterBox

const Container = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CancelSaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  text-align: center;
  justify-self: center;
  text-align: center;
  cursor: pointer;
`
