import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import addIcon from '@/assets/icons/plusInCircle.svg'
import AppModal from '@/common/components/modal/AppModal'
import DeleteWarning from '../../../../order-history/components/bindContainer/components/DeleteWarning'
import DropdownIcon from '@/common/components/readyIcons/DropdownIcon'
import ListItemFullDropdown from './ListItemFullDropdown'
import { ORDER_DATA } from '@/api/apiTypes'
import AppTooltip from '@/common/components/appTooltip/AppTooltip'
import AppButton from '@/common/components/appButton/AppButton'
import {
  getOrdersWithoutContainer,
  assignOrderToContainer,
} from '@/api/apiCalls'
import ChooseButton from '@/common/components/appButton/ChooseButton'

type Props = {
  onClick: () => void
  brandName: string
  link: string
  departureDate: string
  arrivalDate: string
  containerId: number

  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
  orders: ORDER_DATA[]
}

const ListItemFull = ({
  onClick,
  brandName,
  link,
  departureDate,
  arrivalDate,
  containerId,
  isDropdownOpen,
  setIsDropdownOpen,
  orders,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ordersWithoutContainer, setOrdersWithoutContainer] = useState<
    ORDER_DATA[]
  >([])
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (!isModalOpen) return

    setIsLoading(true)
    getOrdersWithoutContainer().then((res) => {
      setOrdersWithoutContainer(res)
      setIsLoading(false)
    })
  }, [isModalOpen])

  const handleOrderSelect = (orderId: number) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId)
  }

  const handleAssignOrder = async () => {
    if (!selectedOrderId) return

    try {
      setIsLoading(true)
      await assignOrderToContainer(
        selectedOrderId.toString(),
        containerId.toString()
      )
      setIsModalOpen(false)
      window.location.reload()
    } catch (error) {
      console.error('Error assigning order to container:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Container onClick={onClick}>
        <LabelBox>
          {orders?.length > 0 ? (
            <DropdownIcon
              isOpen={isDropdownOpen}
              onClickWithEvent={handleDropdown}
            />
          ) : (
            <div style={{ width: 36 }} />
          )}

          <NameLabel>{brandName}</NameLabel>
        </LabelBox>
        <LinkLabel data-tooltip={link}>
          <AppTooltip
            tooltipValue={<TooltipContent> {link}</TooltipContent>}
            backgroundColor='black'
          >
            {link}
          </AppTooltip>
        </LinkLabel>
        <Label>{departureDate}</Label>
        {/* <Label>{arrivalDate}</Label> */}
        <Label>
          {`${orders.length}/4`}
          <Image
            src={addIcon}
            alt='icon'
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'pointer', marginLeft: 10 }}
          />
        </Label>
      </Container>

      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AssignOrderModal>
          <h4>
            Assign Order to <b>{brandName}</b>
          </h4>

          <OrdersListContainer>
            {isLoading ? (
              <LoadingText>Loading orders...</LoadingText>
            ) : ordersWithoutContainer.length === 0 ? (
              <NoOrdersText>No orders available to assign</NoOrdersText>
            ) : (
              ordersWithoutContainer.map((order) => (
                <OrderItem
                  key={order.id}
                  isSelected={selectedOrderId === order.id}
                  onClick={() => handleOrderSelect(order.id)}
                >
                  <OrderInfo>
                    <OrderTitle>
                      {order.manufacturer} {order.model} (
                      {order.manufactureYear})
                    </OrderTitle>
                    <OrderVin>VIN: {order.vin}</OrderVin>
                    <OrderVin>Dealer: {order.dealer.email}</OrderVin>
                  </OrderInfo>
                  <SelectionCircle isSelected={selectedOrderId === order.id}>
                    {selectedOrderId === order.id && <InnerCircle />}
                  </SelectionCircle>
                </OrderItem>
              ))
            )}
          </OrdersListContainer>

          <ButtonsContainer>
            <ChooseButton
              text='Cancel'
              onClick={() => setIsModalOpen(false)}
              isActive={false}
            />
            <ChooseButton
              text={isLoading ? 'Loading...' : 'Assign'}
              onClick={handleAssignOrder}
              isActive={selectedOrderId !== null && !isLoading}
              withBorder
            />
          </ButtonsContainer>
        </AssignOrderModal>
      </AppModal>
      {isDropdownOpen &&
        orders.length > 0 &&
        orders.map((i) => (
          <ListItemFullDropdown
            key={i.id}
            onClick={() => {}}
            orderData={i as unknown as ORDER_DATA}
            containerId={containerId}
          />
        ))}
    </>
  )
}

export default ListItemFull

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 50px 0 12px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};

  /* cursor: pointer; */
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  /* cursor: pointer; */
`

const NameLabel = styled(Label)`
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  justify-content: start;
  text-align: start;
`

const IdLabel = styled(Label)`
  align-items: start;
  justify-content: start;
`

const LinkLabel = styled(Label)`
  color: ${({ theme }) => theme.colors?.link_blue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  position: relative;
  cursor: pointer;
  justify-content: flex-start;
  text-align: left;
`
const TooltipContent = styled.div`
  padding: 20px;
`
const AssignOrderModal = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 32px;
  gap: 24px;
  margin-top: 200px;
  align-items: center;
  width: 500px;
  max-height: 80vh;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px;
    width: 90%;
  }
`

const OrdersListContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};
  border-radius: 8px;
  padding: 8px;
`

const OrderItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.main_gray_04 : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main_gray_04};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const OrderTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const OrderVin = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.small};
  color: ${({ theme }) => theme.colors?.main_gray_68};
  margin-top: 4px;
`

const SelectionCircle = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.main_gray_100 : theme.colors.main_gray_26};
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.main_gray_100};
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

const LoadingText = styled.div`
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const NoOrdersText = styled.div`
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
