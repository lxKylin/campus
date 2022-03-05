import lxRequest from '../index'

enum campus {
  newsList = '/news/list',
  foreshow = '/foreshow/list'
}

export function getNewsData() {
  return lxRequest.get({
    url: campus.newsList,
    params: {
      offset: 0,
      size: 20
    }
  })
}

export function getForeshowList() {
  return lxRequest.get({
    url: campus.foreshow,
    params: {
      offset: 0,
      size: 10
    }
  })
}

// export function getStudyList() {
//   return lxRequest.get({
//     url: work.studyList,
//     params: {
//       offset: 0,
//       size: 10
//     }
//   })
// }

// export function getOccupationList() {
//   return lxRequest.get({
//     url: work.occupationList,
//     params: {
//       offset: 0,
//       size: 30
//     }
//   })
// }
