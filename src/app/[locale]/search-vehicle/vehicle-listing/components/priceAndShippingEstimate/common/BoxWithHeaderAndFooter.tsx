import InfoIconWithTooltip from '@/common/components/appTooltip/InfoIconWithTooltip'
import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'
import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.JSX.Element
  header: string
  footerText: string
  footerValue: string
  width: number
  tooltipText: string
}

const BoxWithHeaderAndFooter = ({
  children,
  header,
  footerText,
  footerValue,
  width,
  tooltipText,
}: Props) => {
  return (
    <Container width={width}>
      <Frame>
        <Header>{header}</Header>
        <Line />
      </Frame>
      {children}
      <Frame>
        <Line />
        <FooterBox>
          <Header>{footerText}</Header>
          <TotalBox>
            <InfoIconWithTooltip
              tooltipValue={<ToolTipTextBox text={tooltipText} />}
              style='black'
            />
            <Header>{footerValue}</Header>
          </TotalBox>
        </FooterBox>
      </Frame>
    </Container>
  )
}

export default BoxWithHeaderAndFooter

type ContainerProps = { width: number }

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing?.lg};

  padding: ${({ theme }) => theme.spacing?.xl};
  border-radius: ${({ theme }) => theme.radius?.xl};
  background-color: ${({ theme }) => theme.colors?.white};

  width: ${({ width }) => `${width}px`};

  @media ${({ theme }) => theme.media?.md} {
    width: 472px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.lg};
    width: 343px;
  }
`

const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TotalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`

const Line = styled.div`
  height: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
