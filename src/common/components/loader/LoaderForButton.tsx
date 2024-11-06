import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import './styles.css'

type Props = { size?: 'default' | 'large' | 'small' }

const LoaderForButton = ({ size = 'large' }: Props) => {
  return <Spin indicator={<LoadingOutlined spin />} size={size} />
}

export default LoaderForButton
