import Image from 'next/image'

import AppTooltip from './AppTooltip'

import infoIcon from '@/assets/icons/infoIconEmpty.svg'
import infoIconBlack from '@/assets/icons/infoIconEmptyBlack.svg'
import styled from 'styled-components'

type Props = { tooltipValue: React.ReactNode; style?: 'black' | 'gray' }

const InfoIconWithTooltip = ({ tooltipValue, style = 'gray' }: Props) => {
  return (
    <AppTooltip tooltipValue={tooltipValue}>
      <IconBox>
        <Image
          src={style === 'black' ? infoIconBlack : infoIcon}
          alt='info icon'
          width={20}
          height={20}
        />
      </IconBox>
    </AppTooltip>
  )
}

export default InfoIconWithTooltip

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`
