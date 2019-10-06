module.exports = {
  report: 'currentSaturation',
  reportParser: value => (value / 254) * 100,
  get: 'currentSaturation',
  getParser: value => (value / 254) * 100,
  set: () => 'moveToSaturation',
  setParser: (value) => {
    const sat = (value / 100) * 254
    return ({
      saturation: sat,
      transtime: 5,
    })
  },
}
