import styled from 'styled-components'
import BidBox from './components/BidBox'
import ImagesBox from './components/ImagesBox'

type Props = {}

const ImageAndBid = (props: Props) => {
  return (
    <Container>
      <ImagesBox />
      <CarModelAndBidFrame>
        <CarBrandAndModel>
          <BrandLabel>2020 Mercedes Benz </BrandLabel>
          <ModelLabel>E class, Diezel</ModelLabel>
        </CarBrandAndModel>

        <BidBox />
      </CarModelAndBidFrame>
    </Container>
  )
}

export default ImageAndBid

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`

const CarModelAndBidFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  width: 468px;

  @media ${({ theme }) => theme.media?.md} {
    width: 359px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
  }
`

const CarBrandAndModel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const BrandLabel = styled.label`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
const ModelLabel = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_42};

  cursor: default;
`
