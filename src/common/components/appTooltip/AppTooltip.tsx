import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import theme from '@/app/[locale]/pilot/theme'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: any
  tooltipValue: React.ReactNode
  arrow?: boolean
  radius?: number
  maxWidth?: number
  backgroundColor?: string
}

const AppTooltip = ({
  children,
  tooltipValue,
  radius = 8,
  maxWidth = 320,
  arrow = true,
  backgroundColor = theme.colors?.white,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

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
        trigger={isMobile ? 'click' : 'hover'}
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
