const defaultBanner = 'eHealth - Your Health Insurance Matchmaker'

const gradientBanner = require('gradient-string')([
  { color: '#42d392', pos: 0 },
  { color: '#42d392', pos: 0.1 },
  { color: '#647eff', pos: 1 }
])(defaultBanner)

export { defaultBanner, gradientBanner }
