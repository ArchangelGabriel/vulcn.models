process.env.SECRET_TEST = 'secret_string'

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

test('should generate jwt', (done) => {
  const JWT_REGEX = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
  const email = 'test_email@vulcn.ai'
  const password = 'test_password'

  let u = new User({ email, password })
  let jwt = u.generateJWT()
  expect(jwt).toBeDefined()
  expect(JWT_REGEX.test(jwt)).toEqual(true)
  done()
})

test('toAuthJSON should contain _id, email and token', (done) => {
  const email = 'test_email@vulcn.ai'
  const password = 'test_password'

  let u = new User({ email, password })
  let authObj = u.toAuthJSON()

  const attributes = ['_id', 'email', 'token']
  attributes.forEach((attr) => expect(authObj[attr]).toBeDefined())
  done()
})