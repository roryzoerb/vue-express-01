const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/signup',
    AuthControllerPolicy.signup,
    AuthController.signup)
  app.post('/signin',
    AuthController.signin)
  app.get('/songs',
    SongsController.index)
}
