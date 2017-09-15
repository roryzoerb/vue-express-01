const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
// security concern (cors)
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

require('./routes')(app)

sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
