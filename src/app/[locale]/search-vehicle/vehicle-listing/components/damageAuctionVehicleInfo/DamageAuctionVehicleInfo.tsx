import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'
import ToolTipTextWithHeader from '@/common/components/appTooltip/ToolTipTextWithHeader'
import BoxWithHeader from '../common/BoxWithHeader'
import LabelValuePair from '../common/LabelValuePair'

type Props = {}

const DamageAuctionVehicleInfo = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <FrameColumn>
          <BoxWithHeader header={t('damage')}>
            <FrameForPairs width={644}>
              <LabelValuePair
                label={t('damage')}
                value={t('undercarriage')}
                tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
              />
              <LabelValuePair
                label={t('condition')}
                value={t('wont start')}
                tooltipValue={
                  <ToolTipTextWithHeader
                    header='This is a tooltip'
                    text='Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'
                  />
                }
              />
              <LabelValuePair
                label={t('title')}
                value={t('certification of title')}
              />
            </FrameForPairs>
          </BoxWithHeader>
          <BoxWithHeader header={t('damage')}>
            <FrameForPairs width={652}>
              <LabelValuePair label={t('vin')} value={t('undercarriage')} />
              <LabelValuePair label={t('lot number')} value={t('wont start')} />
              <LabelValuePair
                label={t('date added')}
                value={t('certification of title')}
              />
              <LabelValuePair
                label={t('date of auction')}
                value={t('certification of title')}
                tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
              />
              <LabelValuePair
                label={t('facility')}
                value={t('certification of title')}
              />
              <LabelValuePair
                label={t('seller')}
                value={t('certification of title')}
              />
            </FrameForPairs>
          </BoxWithHeader>
        </FrameColumn>
        <BoxWithHeader header={t('damage')}>
          <FrameForPairs width={404}>
            <LabelValuePair label={t('odometer')} value={'129,000 mi'} />
            <LabelValuePair label={t('keys')} value={t('yes')} />
            <LabelValuePair label={t('engine type')} value={'3.5L'} />
            <LabelValuePair label={t('drivetrain')} value={'FWD'} />
            <LabelValuePair label={t('transmission')} value={t('automatic')} />
            <LabelValuePair label={t('fuel')} value={t('gas')} />
            <LabelValuePair label={t('cylinders')} value={'sedan'} />
            <LabelValuePair label={t('body style 1')} value={'Silver'} />
          </FrameForPairs>
        </BoxWithHeader>
      </Frame>
    </Container>
  )
}

export default DamageAuctionVehicleInfo

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`

const FrameColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

type FrameForPairsType = { width: number }

const FrameForPairs = styled.div<FrameForPairsType>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};

  width: ${({ width }) => `${width}px`};

  @media ${({ theme }) => theme.media?.md} {
    width: 408px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 295px;
  }
`
