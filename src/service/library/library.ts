import lxRequest from '../index'

enum library {
  borrowList = '/borrow/list'
}

export function getBorrowList() {
  return lxRequest.get({
    url: library.borrowList,
    params: {
      offset: 0,
      size: 20
    }
  })
}
