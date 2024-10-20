type AuctionApiResponse = {
  result: AuctionResult[]
  api_request_left: number
}

type AuctionResult = {
  id: number
  auction_name: string
  body_style: string
  car_keys: string
  color: string
  cylinders: string
  doc_type: string
  drive: string
  engine_type: string
  est_retail_value: number
  fuel: string
  highlights: string
  location: string
  lot_number: number
  make: string
  model: string
  odometer: number
  primary_damage: string
  secondary_damage: string | null
  seller: string
  series: string
  transmission: string
  vehicle_type: string
  vin: string
  year: number
  is_insurance: number
  currency_code_id: number
  created_at: string
  car_photo: CarPhoto
  car_info: string | null
  sales_history: SalesHistory[]
  active_bidding: ActiveBidding[]
  buy_now_car: string | null
  currency: Currency
  buy_now_price_histories: BuyNowPriceHistory[]
}

type CarPhoto = {
  id: number
  all_lots_id: number
  photo: string[]
}

type SalesHistory = {} // Define this further if required based on actual data structure

type ActiveBidding = {
  id: number
  auction: number
  all_lots_id: number
  sale_date: string
  current_bid: number
  date_updated: number
  bid_updated: number
  auction_info: AuctionInfo
}

type AuctionInfo = {
  auction_code: number
  country_name: string
}

type Currency = {
  id: number
  name: string
  char_code: string
  iso_code: number
  code_id: number
}

type BuyNowPriceHistory = {} // Define this further if required based on actual data structure
