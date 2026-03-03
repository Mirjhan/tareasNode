const express = require('express')
const morgan = require('morgan')
const { conectar } = require('./connection')
const incidenciaRoute = require('./src/routes/incidencia_route')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use('/public', express.static('public'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/incidencia', incidenciaRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  conectar()
})
