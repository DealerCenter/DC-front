import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

const statusList = ['arrived', 'on the way', 'in warehouse']

type Props = {}

const ChangeStatusBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <ChangeStatusFrame>
      {statusList.map((item, i) => (
        <Item key={`statusItemForAddContainerModal${i}`}>{t(item)}</Item>
      ))}
    </ChangeStatusFrame>
  )
}

export default ChangeStatusBox

const ChangeStatusFrame = styled.div`
  padding: 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  z-index: 100;

  margin-top: 8px;
`
const Item = styled.div`
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  white-space: nowrap;
  border-radius: 8px;
  text-decoration: none;
  padding: 8px 16px;

  color: ${({ theme }) => theme.colors?.black};
  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
`
