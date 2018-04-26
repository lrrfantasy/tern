export default {
  cities: {
    chengdu: {
      latitude: 30.5728,
      longitude: 104.0668
    },
    beijing: {
      latitude: 39.9042,
      longitude: 116.4074
    },
    shanghai: {
      latitude: 31.2304,
      longitude: 121.4737
    },
    nanjing: {
      latitude: 32.0603,
      longitude: 118.7969
    },
    hongkong: {
      latitude: 22.3964,
      longitude: 114.1095
    },
    bali: {
      latitude: -8.65,
      longitude: 115.2167
    },
    amsterdam: {
      latitude: 52.3702,
      longitude: 4.8952
    },
    manchester: {
      latitude: 53.4808,
      longitude: -2.2426
    },
    london: {
      latitude: 51.5072,
      longitude: 0.1275
    },
    phuket: {
      latitude: 7.89,
      longitude: 98.3983
    },
    bangalore: {
      latitude: 12.9667,
      longitude: 77.5667
    },
    tokyo: {
      latitude: 35.6833,
      longitude: 139.6833
    },
    nagoya: {
      latitude: 35.1833,
      longitude: 136.9
    },
    sydney: {
      latitude: -33.865,
      longitude: 151.2094
    },
    melbourne: {
      latitude: -37.8136,
      longitude: 144.9631
    },
    brisbane: {
      latitude: -27.4667,
      longitude: 153.0333
    },
    moscow: {
      latitude: 55.75,
      longitude: 37.6167
    },
    stockholm: {
      latitude: 59.3294,
      longitude: 18.0686
    },
    osaka: {
      latitude: 34.6939,
      longitude: 135.5022
    },
    newyork: {
      latitude: 40.7127,
      longitude: -74.0059
    },
    portlouis: {
      latitude: -20.1644,
      longitude: 57.5041
    },
    seoul: {
      latitude: 37.5665,
      longitude: 126.9780
    },
    naha: {
      latitude: 26.2123,
      longitude: 127.6792
    },
    boracay: {
      latitude: 11.9804,
      longitude: 121.9189
    }
  },
  routes: [
    { src: 'hongkong', dst: 'bali' },
    { src: 'chengdu', dst: 'amsterdam' },
    { src: 'amsterdam', dst: 'manchester' },
    { src: 'london', dst: 'shanghai' },
    { src: 'chengdu', dst: 'phuket' },
    { src: 'chengdu', dst: 'bangalore' },
    { src: 'beijing', dst: 'tokyo' },
    { src: 'chengdu', dst: 'nagoya' },
    { src: 'shanghai', dst: 'sydney' },
    { src: 'sydney', dst: 'melbourne' },
    { src: 'sydney', dst: 'brisbane' },
    { src: 'beijing', dst: 'moscow' },
    { src: 'beijing', dst: 'stockholm' },
    { src: 'nanjing', dst: 'osaka' },
    { src: 'beijing', dst: 'newyork' },
    { src: 'chengdu', dst: 'portlouis' },
    { src: 'beijing', dst: 'seoul' },
    { src: 'chengdu', dst: 'seoul' },
    { src: 'shanghai', dst: 'naha' },
    { src: 'naha', dst: 'tokyo' },
    { src: 'chengdu', dst: 'tokyo' },
    { src: 'chengdu', dst: 'boracay' },
    { src: 'chengdu', dst: 'osaka' }
  ]
}