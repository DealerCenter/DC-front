import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = { statusCode: number }

const StatusIndicator = ({ statusCode }: Props) => {
  const t = useTranslations('')

  const statusText =
    statusCode === 1
      ? t('document.problem free')
      : statusCode === 2
      ? t('document.problem')
      : t('document.contact auction')

  const color =
    statusCode === 1 ? '#09A74C' : statusCode === 2 ? '#E43931' : '#202020'

  const icon =
    statusCode === 1 ? (
      <CheckCircleOutlined />
    ) : statusCode === 2 ? (
      <CloseCircleOutlined />
    ) : (
      <ExclamationCircleOutlined />
    )
  return (
    <Container style={{ color: '#202020', fontSize: 13 }}>
      {icon}
      <span style={{ color, fontWeight: 400, marginLeft: 10 }}>
        {statusText}
      </span>
    </Container>
  )
}

export default StatusIndicator

const Container = styled.div`
  color: #202020;
  font-size: 13px;
  display: flex;
  align-items: center;
`
