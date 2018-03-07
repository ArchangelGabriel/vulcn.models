const mergeReq = require('../utils/mergeReq')

test('mergeReq should copy value of req.a to req.b', (done) => {
  const middleware = mergeReq(
    ['a'],
    ['b'],
  )

  let req = { a: 1 }
  const expectedReq = { a: 1, b: 1 }
  middleware(req, {}, () => {
    expect(req).toEqual(expectedReq)
    done()
  })
})

test('mergeReq should copy deep value of req.a.b.c to req.d.e', (done) => {
  const middleware = mergeReq(
    ['a', 'b', 'c'],
    ['d', 'e'],
  )

  let req = { a: { b: { c: [1, 2, 3] } } }
  const expectedReq = { a: { b: { c: [1, 2, 3] } }, d: { e: [1, 2, 3] } }
  middleware(req, {}, () => {
    expect(req).toEqual(expectedReq)
    done()
  })
})

test('multi should wrap value in a list', (done) => {
  const middleware = mergeReq(
    ['a'],
    ['b'],
    { multi: true },
  )

  let req = { a: 1 }
  const expectedReq = { a: 1, b: [1] }
  middleware(req, {}, () => {
    expect(req).toEqual(expectedReq)
    done()
  })
})