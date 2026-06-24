const express = require('express')

const { conectar } = require('./connection')
const incidenciaRoute = require('./src/routes/incidencia_route')
const usuarioRoute = require('./src/routes/usuario_route')
const setMiddlewares = require('./src/utils/middlewares/config')
const app = express()
const { PORT } = process.env

setMiddlewares(app)
app.use('/incidencia', incidenciaRoute)
app.use('/usuario', usuarioRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  conectar()
})
