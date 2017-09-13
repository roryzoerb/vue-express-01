const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      // need to encrypt this
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided falied to match the following:<br>
              1) It must contain ONLY lower case, upper case and numeric values and/or<br>
              2) It must be from 8 to 32 characters in length`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
