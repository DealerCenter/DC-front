import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getDealersAdmin, getReceiversAdmin } from '@/api/apiCalls'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'

import BasicButton from '@/common/components/appButton/BasicButton'
import { ShippingStatus } from '@/common/helpers/constants'
// import SingleDropdown from '../../common/SingleDropdown'
import SingleDropdownShippingStatus from '../common/SingleDropdownShippingStatus'
import OptionsBoxWithDealer from './OptionsBoxWithDealer'
import SingleDropdown from '../common/SingleDropdown'
// import OptionsBoxWithDealer from '../OptionsBoxWithDealer'

type Props = {
  toggleDropdown: () => void
  setShippingStatus: (arg: ShippingStatus) => void
  setDealerId: (arg: number | null) => void
  setReceiverId: (arg: number | null) => void
  checkedShippingStatus: ShippingStatus
  setCheckedShippingStatus: (arg: ShippingStatus) => void
  checkedDealerId: number | null
  setCheckedDealerId: (arg: number | null) => void
  checkedRecipientId: number | null
  setCheckedRecipientId: (arg: number | null) => void
  clearFilterStates: () => void
}

const DropdownFilterBoxWithDealer = ({
  toggleDropdown,
  setShippingStatus,
  setDealerId,
  setReceiverId,
  checkedShippingStatus,
  setCheckedShippingStatus,
  checkedDealerId,
  setCheckedDealerId,
  checkedRecipientId,
  setCheckedRecipientId,
  clearFilterStates,
}: Props) => {
  const t = useTranslations('')

  const [activeSetting, setActiveSetting] = useState<
    'status' | 'recipient' | 'dealer' | null
  >('status')

  const [receiversList, setReceiversList] = useState<RECEIVER_DATA[]>([])
  const [receiversSearchQuery, setReceiversSearchQuery] = useState('')

  const [dealersList, setDealersList] = useState<DEALERS_DATA[]>([])
  const [dealersSearchQuery, setDealersSearchQuery] = useState('')

  const handleCancel = () => {
    clearFilterStates()
    toggleDropdown()
  }

  const handleSave = () => {
    setShippingStatus(checkedShippingStatus)

    setDealerId(checkedDealerId)
    setReceiverId(checkedRecipientId)
    toggleDropdown()
  }

  const getRecipients = async () => {
    const res = await getReceiversAdmin({ search: receiversSearchQuery })
    res && setReceiversList(res.data)
  }

  useEffect(() => {
    getRecipients()
    //eslint-disable-next-line
  }, [receiversSearchQuery])

  const getDealers = async () => {
    const res = await getDealersAdmin({ firstName: dealersSearchQuery })
    res && setDealersList(res.data)
  }

  useEffect(() => {
    getDealers()
    //eslint-disable-next-line
  }, [dealersSearchQuery])

  return (
    <Container>
      <Frame>
        <OptionsBoxWithDealer
          activeOption={activeSetting}
          setActiveOption={setActiveSetting}
        />
        {activeSetting === 'status' ? (
          <SingleDropdownShippingStatus
            checkedShippingStatus={checkedShippingStatus}
            setCheckedShippingStatus={setCheckedShippingStatus}
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
        <BasicButton
          onClick={handleSave}
          height={36}
          width={157}
          color='black'
          isDisabled={
            !checkedShippingStatus && !checkedRecipientId && !checkedDealerId
          }
        >
          <TextBold>{t('save')}</TextBold>
        </BasicButton>
      </CancelSaveBox>
    </Container>
  )
}

export default DropdownFilterBoxWithDealer

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
