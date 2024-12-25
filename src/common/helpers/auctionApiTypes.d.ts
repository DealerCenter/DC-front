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

type VehicleListApiResponse = {
  apiRequestLeft: number
  filters: {
    auction_date_from: null | string
    auction_date_to: null | string
    auction_name: null | string
    car_info_vehicle_type: null | string
    created_at_from: null | string
    created_at_to: null | string
    estimate_retail_from: null | number
    estimate_retail_to: null | number
    is_buy_now: null | boolean
    make: string
    model: string
    odometer_from: null | number
    odometer_to: null | number
    page: number
    sale_price_from: null | number
    sale_price_to: null | number
    update_at_from: null | string
    updated_at_to: null | string
    year_from: null | number
    year_to: null | number
  }
  hash: string
  pagination: VehicleListPagination
  result: VehicleListResult[]
}

type VehicleListPagination = {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
}

type VehicleListResult = {
  active_bidding: {
    all_lots_id: number
    auction: number
    bid_updated: number
    current_bid: number
    date_updated: number
    id: number
    sale_date: null | string
  }[]
  auction_name: string
  body_style: string
  buy_now_car: null | any // Update `any` to the specific type if known
  buy_now_price_histories: Array<Record<string, any>>
  car_info: CarInfo
  car_keys: string
  car_photo: {
    id: number | null
    all_lots_id: number
    photo: Array<string> // Specify the type of elements in the array if known
  }
  color: string
  created_at: string
  currency: {
    id: number
    name: string
    char_code: string
    iso_code: number
    code_id: number
  }
  currency_code_id: number
  cylinders: string
  doc_type: string
  drive: string
  engine_type: string
  est_retail_value: number
  fuel: string
  highlights: string
  id: number
  is_insurance: number
  location: string
  lot_number: number
  make: string
  model: string
  odometer: number
  primary_damage: string
  sales_history: Array<Record<string, any>>
  sales_history_last: null | any // Update `any` to the specific type if known
  secondary_damage: string
  seller: string
  series: string
  transmission: string
  updated_at: string
  vehicle_type: null | any // Update `any` to the specific type if known
  vin: string
  year: number
}

type CarInfo = {
  all_lots_id: number
  body_class: {
    id: number
    body_class: string
  }
  id: number
  make: {
    id: number
    make: string
    make_slug: string
    created_at: string
    updated_at: string
  }
  make_id: number
  model: {
    id: number
    make_id: number
    model: string
    model_slug: string
    created_at: string
    updated_at: string
  }
  model_id: number
  series: {
    id: number
    model_id: number
    series: string
  }
  series_id: number
  vehicle_type: {
    id: number
    vehicle_type: string
  }
  vehicle_type_id: number
}

type carDetailsState = {
  make: string
  model: string
  year_from: string
  year_to: string
  odometer_from: number
  odometer_to: number
}

type getMakesResponse = {
  api_request_left: number
  result: getMakesResult[]
}
type getMakesResult = {
  id: number
  make: string
  make_slug: string
  created_at: string // ISO 8601 format
  updated_at: string // ISO 8601 format
}
