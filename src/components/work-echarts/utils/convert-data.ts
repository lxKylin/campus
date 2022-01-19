import { coordinateData } from './coordinate-data'

export let convertData = function (data: any) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
