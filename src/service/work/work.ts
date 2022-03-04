import lxRequest from '../index'

enum work {
  enrollmentList = '/enrollment/list',
  activeList = '/active/list'
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
