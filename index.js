const express = require('express')
const app = express()

require('dotenv').config() // env variables
require('./Config/configs') // DB connection

const port = process.env.PORT || 8888

const dogController = require('./Controllers/DogController')
const gameController = require('./Controllers/GameController')

app.use('/dogs', dogController)
app.use('/games', gameController)

app.listen(port, () => {
  console.log(`Dog Proxy at http://localhost:${port}`)
})