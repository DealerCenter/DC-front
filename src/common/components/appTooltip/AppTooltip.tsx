import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import theme from '@/app/[locale]/theme'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  tooltipValue: React.ReactNode
  arrow?: boolean
  radius?: number
  maxWidth?: number
  trigger?: 'click' | 'hover'
  backgroundColor?: string
}

const AppTooltip = ({
  children,
  tooltipValue,
  radius,
  maxWidth,
  trigger,
  arrow,
  backgroundColor,
}: Props) => {
  const appRadius = radius ? radius : 30
  const appMaxWidth = maxWidth ? maxWidth : 320
  const appBackgroundColor = backgroundColor
    ? backgroundColor
    : theme.colors?.white
  const appArrow = arrow ? arrow : true

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: appRadius,
        },
      }}
    >
      <Tooltip
        title={tooltipValue}
        color={appBackgroundColor}
        trigger={trigger}
        overlayStyle={{ maxWidth: appMaxWidth }}
        overlayInnerStyle={{ padding: 0 }}
        arrow={appArrow}
      >
        <ChildrenFrame>{children}</ChildrenFrame>
      </Tooltip>
    </ConfigProvider>
  )
}

export default AppTooltip

const ChildrenFrame = styled.div`
  cursor: pointer;
`
