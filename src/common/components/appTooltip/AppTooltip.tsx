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
  radius = 30,
  maxWidth = 320,
  trigger,
  arrow = true,
  backgroundColor = theme.colors?.white,
}: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: radius,
        },
      }}
    >
      <Tooltip
        title={tooltipValue}
        color={backgroundColor}
        trigger={trigger}
        overlayStyle={{ maxWidth: maxWidth }}
        overlayInnerStyle={{ padding: 0 }}
        arrow={arrow}
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
