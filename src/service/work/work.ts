import lxRequest from '../index'

enum work {
  enrollmentList = '/enrollment/list',
  activeList = '/active/list',
  studyList = '/study/list',
  occupationList = '/occupation/list'
}

export function getEnrollmentData() {
  return lxRequest.get({
    url: work.enrollmentList,
    params: {
      offset: 0,
      size: 20
    }
  })
}

export function getActiveList() {
  return lxRequest.get({
    url: work.activeList,
    params: {
      offset: 0,
      size: 10
    }
  })
}

export function getStudyList() {
  return lxRequest.get({
    url: work.studyList,
    params: {
      offset: 0,
      size: 10
    }
  })
}

export function getOccupationList() {
  return lxRequest.get({
    url: work.occupationList,
    params: {
      offset: 0,
      size: 30
    }
  })
}
