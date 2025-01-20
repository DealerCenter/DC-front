import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getContainersAdmin } from '@/api/apiCalls'
import AppSelectAntDesign from '@/common/components/appSelect/AppSelectAntDesign'
import Box from '../../../components/common/Box'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../hooks/useCreateOrderContext'
import DropdownWithSearch from './DropdownWithSearch'
import ShippingStatusBox from '@/common/components/shippingStateBox/ShippingStatusBox'
import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'
import useFilters from './useFilters'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'
import NotFoundSelect from '@/common/components/notFoundSelect/NotFoundSelect'
import AddRecipientAdmin from '../../../dealers-list/components/addRecipientAdmin/AddRecipientAdmin'
import AppModal from '@/common/components/modal/AppModal'
import AddContainer from '../../../shipping-containers/components/addContainer/AddContainer'

type Props = {}

const RightFrame = ({}: Props) => {
  const { values, setFieldValue } = useCreateOrderContext()
  const t = useTranslations('')
  const {
    handleReceiverNameSearch,
    fetchReceiverDataByName,
    handleDealerSearch,
    fetchDealerOptions,
    receiverNameOptions,
    receiverPhoneOptions,
    dealerNameOptions,
    dealerPhoneOptions,
    setIsAddReceiverModalOpen,
    isAddReceiverModalOpen,
    isAddContainerModalOpen,
    setIsAddContainerModalOpen,
  } = useFilters()
  const [containerOptions, setContainerOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])

  const handleSetContainerValue = (id: number) => {
    setFieldValue(FIELD_NAMES.CONTAINER_ID, id)
  }

  const fetchContainerData = async () => {
    try {
      const response = await getContainersAdmin()

      setContainerOptions([])

      response?.map((item) =>
        setContainerOptions((prev) => [
          ...prev,
          {
            label: item.name,
            id: item.id,
          },
        ])
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchContainerData()
  }, [])
  return (
    <Container>
      <Box>
        <Header>{t('status')}</Header>
        <Line />
        <ShippingStatusBox
          isEditing={true}
          value={values[FIELD_NAMES.STATUS_AND_DATES]}
          setStatusFieldValue={(value) =>
            setFieldValue(FIELD_NAMES.STATUS_AND_DATES, value)
          }
        />
      </Box>
      <Box>
        <Header>{t('container data')}</Header> <Line />
        <Frame>
          <Frame2>
            <AppSelectAntDesign
              value={values[FIELD_NAMES.CONTAINER_ID]}
              optionsWithId={containerOptions}
              onChangeId={handleSetContainerValue}
              placeholder={t('select')}
              fontSize={13}
              notFoundContent={
                <NotFoundSelect
                  text={t('container could not be found')}
                  handlePress={() => setIsAddContainerModalOpen(true)}
                />
              }
            />
          </Frame2>
        </Frame>
      </Box>
      <Box>
        <Header>{t('recipient data')}</Header> <Line />
        <Frame>
          <Frame2>
            <DropdownWithSearch
              placeholder={t('name surname')}
              fontSize={13}
              fetchData={fetchReceiverDataByName}
              handleSearch={() => {}}
              options={receiverNameOptions}
              value={values[FIELD_NAMES.RECEIVER_ID]}
              setValue={(value) =>
                setFieldValue(FIELD_NAMES.RECEIVER_ID, value)
              }
              notFoundContent={
                <NotFoundSelect
                  text={t('receiver not found')}
                  handlePress={() => setIsAddReceiverModalOpen(true)}
                />
              }
            />
            <DropdownWithSearch
              placeholder={t('phone number')}
              fontSize={13}
              fetchData={fetchReceiverDataByName}
              handleSearch={() => {}}
              options={receiverPhoneOptions}
              value={values[FIELD_NAMES.RECEIVER_ID]}
              setValue={(value) =>
                setFieldValue(FIELD_NAMES.RECEIVER_ID, value)
              }
              notFoundContent={
                <NotFoundSelect
                  text={t('receiver not found')}
                  handlePress={() => setIsAddReceiverModalOpen(true)}
                />
              }
            />
            <Gap4 />
            <VerificationIcon
              verificationStatus={
                receiverNameOptions?.find(
                  (i) => i.id === values[FIELD_NAMES.RECEIVER_ID]
                )?.verificationStatus ?? VERIFICATION_STATUS_NAME.UNKNOWN
              }
            />
          </Frame2>
        </Frame>
      </Box>
      <Box>
        <Header>{t('dealer data')}</Header> <Line />
        <Frame>
          <Frame2>
            <DropdownWithSearch
              placeholder={t('name surname')}
              fontSize={13}
              fetchData={fetchDealerOptions}
              handleSearch={() => {}}
              options={dealerNameOptions}
              value={values[FIELD_NAMES.DEALER_ID]}
              setValue={(value) => setFieldValue(FIELD_NAMES.DEALER_ID, value)}
            />
            <DropdownWithSearch
              placeholder={t('phone number')}
              fontSize={13}
              options={dealerPhoneOptions}
              handleSearch={() => {}}
              fetchData={() => {}}
              value={values[FIELD_NAMES.DEALER_ID]}
              setValue={(value) => setFieldValue(FIELD_NAMES.DEALER_ID, value)}
            />
            <Gap4 />
            <VerificationIcon
              verificationStatus={
                dealerNameOptions?.find(
                  (i) => i.id === values[FIELD_NAMES.DEALER_ID]
                )?.verificationStatus ?? VERIFICATION_STATUS_NAME.UNKNOWN
              }
            />
          </Frame2>
        </Frame>
      </Box>

      <AppModal
        isOpen={isAddReceiverModalOpen}
        onRequestClose={() => setIsAddReceiverModalOpen(false)}
      >
        <AddRecipientAdmin
          dealerId={values[FIELD_NAMES.DEALER_ID]}
          onSuccess={() => {
            fetchReceiverDataByName('')
            setIsAddReceiverModalOpen(false)
          }}
          dealerSection={
            <Frame2>
              <DropdownWithSearch
                placeholder={t('name surname')}
                fontSize={13}
                fetchData={fetchDealerOptions}
                handleSearch={() => {}}
                options={dealerNameOptions}
                value={values[FIELD_NAMES.DEALER_ID]}
                setValue={(value) =>
                  setFieldValue(FIELD_NAMES.DEALER_ID, value)
                }
              />
              <DropdownWithSearch
                placeholder={t('phone number')}
                fontSize={13}
                options={dealerPhoneOptions}
                handleSearch={() => {}}
                fetchData={() => {}}
                value={values[FIELD_NAMES.DEALER_ID]}
                setValue={(value) =>
                  setFieldValue(FIELD_NAMES.DEALER_ID, value)
                }
              />
              <Gap4 />
              <VerificationIcon
                verificationStatus={
                  dealerNameOptions?.find(
                    (i) => i.id === values[FIELD_NAMES.DEALER_ID]
                  )?.verificationStatus ?? VERIFICATION_STATUS_NAME.UNKNOWN
                }
              />
            </Frame2>
          }
          onClose={() => setIsAddReceiverModalOpen(false)}
        />
      </AppModal>

      <AppModal
        isOpen={isAddContainerModalOpen}
        onRequestClose={() => setIsAddContainerModalOpen(false)}
      >
        <AddContainer
          onClose={() => {
            setIsAddContainerModalOpen(false)
            fetchContainerData()
          }}
          setUploadedSuccessfully={() => {}}
        />
      </AppModal>
    </Container>
  )
}

export default RightFrame

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
    width: 343px;
  }
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
const Gap4 = styled.div`
  margin-left: 4px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`
const Frame2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  white-space: nowrap;
`
