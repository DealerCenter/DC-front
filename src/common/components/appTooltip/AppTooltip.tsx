import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import theme from '@/app/[locale]/theme'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  tooltipValue: React.ReactNode
  radius?: number
  maxWidth?: number
  trigger?: 'click' | 'hover'
}

const AppTooltip = ({
  children,
  tooltipValue,
  radius,
  maxWidth,
  trigger,
}: Props) => {
  const appRadius = radius ? radius : 8
  const appMaxWidth = maxWidth ? maxWidth : 320

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: appRadius,
        },
      }}
    >
      <Tooltip
        title={<TooltipValueBox>{tooltipValue}</TooltipValueBox>}
        color={theme.colors?.white}
        trigger={trigger}
        overlayStyle={{ maxWidth: appMaxWidth }}
      >
        <ChildrenFrame>{children}</ChildrenFrame>
      </Tooltip>
    </ConfigProvider>
  )
}

export default AppTooltip

const TooltipValueBox = styled.div`
  padding: 8px 12px;
`

const ChildrenFrame = styled.div`
  cursor: pointer;
`
