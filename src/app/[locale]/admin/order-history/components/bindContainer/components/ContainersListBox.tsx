import { CONTAINER_GET_RES } from '@/api/apiTypes'
import React from 'react'
import styled from 'styled-components'

type Props = {
  containersList?: CONTAINER_GET_RES[]
  setContainerToBind: (arg: CONTAINER_GET_RES | null) => void
  setIsOpen: (arg: boolean) => void
}

const ContainersListBox = ({
  containersList,
  setContainerToBind,
  setIsOpen,
}: Props) => {
  const handleItemClick = (value: CONTAINER_GET_RES) => {
    setContainerToBind(value)
    setIsOpen(false)
  }

  return (
    <Container>
      {containersList &&
        containersList.map((item, i) => (
          <Pair
            onClick={() => handleItemClick(item)}
            key={`containerListItemForBindContainerModal${i}`}
          >
            <Link>{item.trackingUrl}</Link>
            <NumberOfCars>{item.id}</NumberOfCars>
          </Pair>
        ))}
    </Container>
  )
}

export default ContainersListBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 323px;
  height: 200px;
  overflow-y: auto;
`
const Pair = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  padding: 8px;

  height: 36px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
`
const Link = styled.label`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  font-weight: ${({ theme }) => theme.colors?.main_gray_100};
  padding: 8px;

  width: 250px;
`

const NumberOfCars = styled.label`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  font-weight: ${({ theme }) => theme.colors?.main_gray_56};

  width: 42px;
`
