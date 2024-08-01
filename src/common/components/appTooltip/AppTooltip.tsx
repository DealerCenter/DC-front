import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import theme from '@/app/[locale]/theme'
import styled from 'styled-components'

type Props = { children: React.ReactNode; tooltipValue: React.ReactNode }

const AppTooltip = ({ children, tooltipValue }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
        },
      }}
    >
      <Tooltip
        title={<TooltipValueBox>{tooltipValue}</TooltipValueBox>}
        color={theme.colors?.white}
      >
        {children}
      </Tooltip>
    </ConfigProvider>
  )
}

export default AppTooltip

const TooltipValueBox = styled.div`
  padding: 8px 12px;
`
