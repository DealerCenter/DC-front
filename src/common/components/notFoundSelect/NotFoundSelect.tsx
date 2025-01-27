import { UserAddOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

type Props = {
  text: string
  handlePress: () => void
}

const NotFoundSelect = ({ handlePress, text }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <UserAddOutlined style={{ fontSize: '24px', color: 'black' }} />
      <Text>{text}</Text>
      <Button onClick={handlePress}>{t('add')}</Button>
    </Container>
  )
}

export default NotFoundSelect

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  background-color: #202020;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 16px;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  cursor: pointer;
`

const Text = styled.span`
  font-size: 12px;
  color: #000000;
  margin-top: 18px;
  text-align: center;
`
