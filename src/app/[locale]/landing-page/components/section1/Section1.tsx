import styled from 'styled-components'

import SearchForDesiredCar from '../SearchForDesiredCar'
import CarsAtAuctionCarousel from './components/CarsOnAuctionCarousel/CarsAtAuctionCarousel'
import DecorativeLabelsBox from './components/searchComponent/components/DecorativeLabelsBox'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <Container>
      <SearchForDesiredCar />
      <CarsAtAuctionCarousel
        onSeeAllClick={() => console.log('see alll clicked')}
      />
      <DecorativeLabelsBox />
    </Container>
  )
}

export default Section1

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
