import React from 'react'
import styled from 'styled-components'

type Props = {}

const containersDummyList = [
  { link: 'maersk.com/ssdfss/202421', numberOfCars: '0/4' },
  { link: 'maersk.com/ssdfss/202414', numberOfCars: '3/4' },
  { link: 'maersk.com/ssdfss/202435', numberOfCars: '2/4' },
  { link: 'maersk.com/ssdfss/202401', numberOfCars: '1/4' },
  { link: 'maersk.com/ssdfss/202477', numberOfCars: '4/4' },
]

const ContainersListBox = (props: Props) => {
  return (
    <Container>
      {containersDummyList.map((item, i) => (
        <Pair key={`containerListItemForBindContainerModal${i}`}>
          <Link>{item.link}</Link>
          <NumberOfCars>{item.numberOfCars}</NumberOfCars>
        </Pair>
      ))}
    </Container>
  )
}

export default ContainersListBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
