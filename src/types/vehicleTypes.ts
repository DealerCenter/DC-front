export enum VehicleType {
  LARGE_CAR = '1 Large Car',
  REGULAR_CAR = '1 Regular Car',
  MOTORCYCLE = 'Motorcycle',
  LARGE_MOTORCYCLE = 'Large Motorcycle',
  OVERSIZE_CAR = 'Oversize Car',
}

export const vehicleTypes = [
  {
    id: 1,
    body_class: 'sedan',
    vehicle_type: VehicleType.REGULAR_CAR,
  },
  {
    id: 2,
    body_class: 'oversized_sedan',
    vehicle_type: VehicleType.LARGE_CAR,
  },
  {
    id: 3,
    body_class: 'suv',
    vehicle_type: VehicleType.LARGE_CAR,
  },
  {
    id: 4,
    body_class: 'oversized_suv',
    vehicle_type: VehicleType.OVERSIZE_CAR,
  },
  {
    id: 5,
    body_class: 'motorcycle',
    vehicle_type: VehicleType.MOTORCYCLE,
  },
  {
    id: 6,
    body_class: 'large_motorcycle',
    vehicle_type: VehicleType.LARGE_MOTORCYCLE,
  },
]

// export const vehicleTypes = [
//   {
//     id: 45,
//     body_class: 'BUS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 44,
//     body_class: 'BUS - SCHOOL BUS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 13,
//     body_class: 'CARGO VAN',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 4,
//     body_class: 'CONVERTIBLE/CABRIOLET',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 8,
//     body_class: 'COUPE',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 7,
//     body_class: 'CROSSOVER UTILITY VEHICLE (CUV)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 62,
//     body_class: 'FIRE APPARATUS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 10,
//     body_class: 'HATCHBACK/LIFTBACK/NOTCHBACK',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 18,
//     body_class: 'INCOMPLETE',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 51,
//     body_class: 'INCOMPLETE - BUS CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 25,
//     body_class: 'INCOMPLETE - CHASSIS CAB (DOUBLE CAB)',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 19,
//     body_class: 'INCOMPLETE - CHASSIS CAB (NUMBER OF CAB UNKNOWN)',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 15,
//     body_class: 'INCOMPLETE - CHASSIS CAB (SINGLE CAB)',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 54,
//     body_class: 'INCOMPLETE - COMMERCIAL BUS CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 28,
//     body_class: 'INCOMPLETE - COMMERCIAL CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 23,
//     body_class: 'INCOMPLETE - CUTAWAY',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 48,
//     body_class: 'INCOMPLETE - GLIDER',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 42,
//     body_class: 'INCOMPLETE - MOTOR HOME CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 50,
//     body_class: 'INCOMPLETE - SCHOOL BUS CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 47,
//     body_class: 'INCOMPLETE - SHUTTLE BUS CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 33,
//     body_class: 'INCOMPLETE - STRIPPED CHASSIS',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 24,
//     body_class: 'LIMOUSINE',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 22,
//     body_class: 'LOW SPEED VEHICLE (LSV) / NEIGHBORHOOD ELECTRIC VEHICLE (NEV)',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 14,
//     body_class: 'MINIVAN',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 63,
//     body_class: 'MOTORCYCLE - COMPETITION',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 66,
//     body_class: 'MOTORCYCLE - CROSS COUNTRY',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 41,
//     body_class: 'MOTORCYCLE - CRUISER',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 43,
//     body_class: 'MOTORCYCLE - CUSTOM',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 40,
//     body_class: 'MOTORCYCLE - DUAL SPORT / ADVENTURE / SUPERMOTO / ON/OFF-ROAD',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 20,
//     body_class: 'MOTORCYCLE - ENCLOSED THREE WHEELED / ENCLOSED AUTOCYCLE',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 70,
//     body_class:
//       'MOTORCYCLE - ENCLOSED THREE WHEELED OR ENCLOSED AUTOCYCLE [1 REAR WHEEL]',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 55,
//     body_class: 'MOTORCYCLE - MOPED',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 21,
//     body_class: 'MOTORCYCLE - SCOOTER',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 60,
//     body_class: 'MOTORCYCLE - SIDE CAR',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 58,
//     body_class: 'MOTORCYCLE - SMALL / MINIBIKE',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 39,
//     body_class: 'MOTORCYCLE - SPORT',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 34,
//     body_class: 'MOTORCYCLE - STANDARD',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 35,
//     body_class: 'MOTORCYCLE - STREET',
//     vehicle_type: VehicleType.MOTORCYCLE,
//   },
//   {
//     id: 69,
//     body_class: 'MOTORCYCLE - THREE-WHEELED MOTORCYCLE (2 REAR WHEELS)',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 29,
//     body_class: 'MOTORCYCLE - TOURING / SPORT TOURING',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 53,
//     body_class: 'MOTORCYCLE - TRIKE',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 64,
//     body_class: 'MOTORCYCLE - UNDERBONE',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 31,
//     body_class: 'MOTORCYCLE - UNENCLOSED THREE WHEELED / OPEN AUTOCYCLE',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 68,
//     body_class:
//       'MOTORCYCLE - UNENCLOSED THREE WHEELED OR OPEN AUTOCYCLE [1 REAR WHEEL]',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 56,
//     body_class: 'MOTORCYCLE - UNKNOWN BODY CLASS',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 57,
//     body_class: 'MOTORHOME',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 27,
//     body_class:
//       'OFF-ROAD VEHICLE - ALL TERRAIN VEHICLE (ATV) (MOTORCYCLE-STYLE)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 52,
//     body_class: 'OFF-ROAD VEHICLE - DIRT BIKE / OFF-ROAD',
//     vehicle_type: VehicleType.LARGE_MOTORCYCLE,
//   },
//   {
//     id: 59,
//     body_class: 'OFF-ROAD VEHICLE - ENDURO (OFF-ROAD LONG DISTANCE RACING)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 71,
//     body_class: 'OFF-ROAD VEHICLE - GO KART',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 61,
//     body_class: 'OFF-ROAD VEHICLE - GOLF CART',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 49,
//     body_class:
//       'OFF-ROAD VEHICLE - MOTOCROSS (OFF-ROAD SHORT DISTANCE, CLOSED TRACK RACING)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 67,
//     body_class:
//       'OFF-ROAD VEHICLE - MULTIPURPOSE OFF-HIGHWAY UTILITY VEHICLE [MOHUV] OR RECREATIONAL OFF-HIGHWAY VEHICLE [ROV]',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 46,
//     body_class: 'OFF-ROAD VEHICLE - RECREATIONAL OFF-ROAD VEHICLE (ROV)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 32,
//     body_class: 'OFF-ROAD VEHICLE - SNOWMOBILE',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 6,
//     body_class: 'PICKUP',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 17,
//     body_class: 'ROADSTER',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 2,
//     body_class: 'SEDAN/SALOON',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 16,
//     body_class: 'SPORT UTILITY TRUCK (SUT)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 3,
//     body_class: 'SPORT UTILITY VEHICLE (SUV)/MULTI-PURPOSE VEHICLE (MPV)',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 36,
//     body_class: 'STEP VAN / WALK-IN VAN',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 65,
//     body_class: 'STREET SWEEPER',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 26,
//     body_class: 'TRAILER',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 30,
//     body_class: 'TRUCK',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 37,
//     body_class: 'TRUCK-TRACTOR',
//     vehicle_type: VehicleType.OVERSIZE_CAR,
//   },
//   {
//     id: 5,
//     body_class: 'VAN',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 12,
//     body_class: 'WAGON',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 38,
//     body_class: 'SUV 4 DOOR',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
//   {
//     id: 39,
//     body_class: 'CONVERTIBLE 2 DOOR',
//     vehicle_type: VehicleType.REGULAR_CAR,
//   },
//   {
//     id: 40,
//     body_class: '4DR SPOR',
//     vehicle_type: VehicleType.LARGE_CAR,
//   },
// ]
