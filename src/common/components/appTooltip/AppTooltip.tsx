import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import theme from '@/app/[locale]/theme'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  tooltipValue: React.ReactNode
  radius?: number
}

const AppTooltip = ({ children, tooltipValue, radius }: Props) => {
  const borderRadius = radius ? radius : 8

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: borderRadius,
        },
      }}
    >
      <Tooltip
        // title={tooltipValue}
        title={<TooltipValueBox>{tooltipValue}</TooltipValueBox>}
        color={theme.colors?.white}
        width={'320px'}
      >
        {children}
      </Tooltip>
    </ConfigProvider>
  )
}

export default AppTooltip

const TooltipValueBox = styled.div`
  padding: 8px 12px;
  width: 320px;
  background-color: red;
`
