const express = require('express')
const app = express()

require('./Config/configs') // DB connection
require('dotenv').config() // env variables

const port = process.env.PORT || 8888


app.listen(port, () => {
  console.log(`Dog Proxy at http://localhost:${port}`)
})