import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'
import ToolTipTextWithHeader from '@/common/components/appTooltip/ToolTipTextWithHeader'
import BoxWithHeader from '../common/BoxWithHeader'
import LabelValuePair from '../common/LabelValuePair'

type Props = { carDetails: AuctionResult }

const DamageAuctionVehicleInfo = ({ carDetails }: Props) => {
  const t = useTranslations('')

  const {
    primary_damage,
    highlights,
    vin,
    lot_number,
    seller,
    odometer,
    car_keys,
    engine_type,
    drive,
    transmission,
    fuel,
    cylinders,
    body_style,
  } = carDetails

  return (
    <Container>
      <Frame>
        <FrameColumn>
          <BoxWithHeader header={t('damage')} width={716}>
            <FrameForPairs>
              <LabelValuePair
                label={t('damage')}
                value={primary_damage}
                tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
              />
              <LabelValuePair
                label={t('condition')}
                value={highlights}
                tooltipValue={
                  <ToolTipTextWithHeader
                    header='This is a tooltip'
                    text='Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'
                  />
                }
              />
              <LabelValuePair label={t('title')} value={'NA'} />
            </FrameForPairs>
          </BoxWithHeader>
          <BoxWithHeader header={t('damage')} width={716}>
            <FrameForPairs>
              <LabelValuePair label={t('vin')} value={vin} />
              <LabelValuePair
                label={t('lot number')}
                value={lot_number.toString()}
              />
              <LabelValuePair
                label={t('date added')}
                value={'not in backend'}
              />
              <LabelValuePair
                label={t('date of auction')}
                value={'not in backend'}
                tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
              />
              <LabelValuePair label={t('facility')} value={'not in backend'} />
              <LabelValuePair
                label={t('seller')}
                value={seller ? seller : 'NA'}
              />
            </FrameForPairs>
          </BoxWithHeader>
        </FrameColumn>
        <BoxWithHeader header={t('damage')} width={468}>
          <FrameForPairs>
            <LabelValuePair
              label={t('odometer')}
              value={odometer ? `${odometer} miles` : 'NA'}
            />
            <LabelValuePair
              label={t('keys')}
              value={car_keys ? car_keys : 'NA'}
            />
            <LabelValuePair
              label={t('engine type')}
              value={engine_type ? engine_type : 'NA'}
            />
            <LabelValuePair
              label={t('drivetrain')}
              value={drive ? drive : 'NA'}
            />
            <LabelValuePair
              label={t('transmission')}
              value={transmission ? transmission : 'NA'}
            />
            <LabelValuePair label={t('fuel')} value={fuel ? fuel : 'NA'} />
            <LabelValuePair
              label={t('cylinders')}
              value={cylinders ? cylinders : 'NA'}
            />
            <LabelValuePair
              label={t('body style')}
              value={body_style ? body_style : 'NA'}
            />
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

const FrameForPairs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`
