import React from 'react'
import { message } from 'antd'
import theme from '@/app/[locale]/theme'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import Image from 'next/image'
import styled from 'styled-components'

type Props = { children: React.ReactNode; messageText: string }

const AppMessage = ({ children, messageText }: Props) => {
  const [messageApi, contextHolder] = message.useMessage()

  const info = () => {
    messageApi.success(
      {
        type: 'success',
        content: messageText,
        icon: (
          <Icon>
            <Image src={checkedGreen} alt='icon' width={16} />
          </Icon>
        ),
        style: {
          color: theme.colors?.text_black,
          fontSize: theme.fontSizes?.medium,
          fontWeight: theme.fontWeight?.bold,
        },
      },
      2
    )
  }

  return (
    <>
      {contextHolder}
      <div onClick={info}>{children}</div>
    </>
  )
}

export default AppMessage

type IconProps = { children: React.ReactNode }

const Icon = ({ children }: IconProps) => {
  return <IconBox>{children}</IconBox>
}

const IconBox = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
