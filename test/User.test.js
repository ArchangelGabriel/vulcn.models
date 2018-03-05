const { User } = require('../entities')
const hashPassword = require('../modelhooks/hashPassword')

test('should be able to hash password', (done) => {
  const password = 'test_password'
  let u = new User({ password })

  hashPassword.call(u, function() {
    expect(u.password).not.toEqual(password)
    done()
  })
})

test('should be able tp identify correct password', (done) => {
  const password = 'test_password'
  let u = new User({ password })

  hashPassword.call(u, function() {
    u.verifyPassword(password).then((match) => {
      expect(match).toEqual(true)
      done()
    })
  })
})

test('should be able to identify incorrect password', (done) => {
  const password = 'test_password'
  const wrong_password = 'wrong_password'
  let u = new User({ password })

  hashPassword.call(u, function() {
    u.verifyPassword(wrong_password).then((match) => {
      expect(match).toEqual(false)
      done()
    })
  })
})