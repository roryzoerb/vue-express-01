const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/signup',
    AuthControllerPolicy.signup,
    AuthController.signup)
  app.post('/signin',
    AuthController.signin)
}
