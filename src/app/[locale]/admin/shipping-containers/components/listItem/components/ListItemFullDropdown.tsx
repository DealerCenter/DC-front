import Image from 'next/image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import AppModal from '@/common/components/modal/AppModal'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import dashedLine from '@/assets/icons/dashedLineGray.svg'
import { CONTAINER_GET_RES, ORDER_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'
import { useTranslations } from 'next-intl'
import DeleteWarning from '@/common/components/deleteWarning/DeleteWarning'

import carImageDummy from '@/assets/images/DummyCarImage.jpg'
import CarImageAndModelBox from './CarImageAndModelBox'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'
import ReceiverBox from './ReceiverBox'
import { removeOrderFromContainer } from '@/api/apiCalls'

type Props = {
  onClick: () => void
  orderData: ORDER_DATA
  dashedLineHeight?: number
  containerId: number
}

const ListItemFullDropdown = ({
  onClick,
  orderData: {
    manufacturer,
    manufactureYear,
    vin,
    model,
    carCost,
    createdAt,
    status,
    receiver,
    dealer,
    carImages,
    transportationCost,
    id: orderId,
  },
  dashedLineHeight = 85,
  containerId,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const t = useTranslations('')

  const unassignOrder = () => {
    try {
      console.log('removeOrderFromContainer', orderId, containerId)
      removeOrderFromContainer(orderId.toString(), containerId.toString())
      window.location.reload()
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error removing order from container:', error)
    }
  }

  return (
    <Container>
      <ImageAndDottedLineBox>
        <DashedLine height={dashedLineHeight} />
        <Circle />
        <CarImageAndModelBox
          imageLink={carImageDummy.src}
          brand={manufacturer}
          model={model}
          year={manufactureYear}
          vinCode={vin}
          date={formatDate(createdAt)}
        />
      </ImageAndDottedLineBox>
      <ReceiverAndDebtFrame>
        <ReceiverBox
          verificationStatus={receiver.verificationStatus}
          fullName={`${receiver.firstName} ${receiver.lastName}`}
          phoneNumber={receiver.phoneNumber}
        />
        <ReceiverBox
          verificationStatus={dealer?.idImageVerificationStatus}
          fullName={`${dealer.firstName} ${dealer.lastName}`}
          phoneNumber={dealer.phoneNumber}
        />
        <DebtLabel>{`$ ${carCost + transportationCost}`}</DebtLabel>
        <Image
          src={trashCan}
          alt='trash icon'
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'pointer' }}
        />
      </ReceiverAndDebtFrame>

      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <DeleteWarning
          onCancel={() => setIsModalOpen(false)}
          onDelete={unassignOrder}
          header={t('unasign order from container')}
          text={t('unsaign order warning')}
        />
      </AppModal>
    </Container>
  )
}

export default ListItemFullDropdown

type DashedLineProps = { height: number }

const DashedLine = styled.div<DashedLineProps>`
  box-sizing: border-box;
  position: absolute;

  left: 29px;
  bottom: 54px;

  width: 15px;
  height: ${({ height }) => `${height}px`};

  border-left: 2px dashed ${({ theme }) => theme.colors?.main_gray_16};
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.main_gray_16};
`

const Circle = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors?.main_gray_16};
`

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
  height: 112px;
  padding: 0 80px 0 52px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};

  border-right: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
  border-bottom: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
  border-left: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
`

const ImageAndDottedLineBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
  width: 320px;
`

const ReceiverAndDebtFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.lg};
  align-items: center;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
