import React from 'react'
import CheckItemBox from './CheckItemBox'
import { FIELD_NAMES, useSearchVehicle } from '../hooks/useSearchVehicle'

type Props = {}

const options = [
  { label: 'IAAI', value: 'IAAI' },
  { label: 'Copart', value: 'COPART' },
]

const ChooseAuctionBox = (props: Props) => {
  const { setFieldValue, values } = useSearchVehicle()

  return (
    <>
      {options.map((item, i) => (
        <CheckItemBox
          key={`AuctionCheckBoxKFDJ${i}`}
          label={item.label}
          isChecked={item.value === values[FIELD_NAMES.AUCTION_NAME]}
          onClick={() => setFieldValue(FIELD_NAMES.AUCTION_NAME, item.value)}
        />
      ))}
    </>
  )
}

export default ChooseAuctionBox
