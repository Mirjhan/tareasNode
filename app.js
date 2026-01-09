const express = require('express')
const morgan = require('morgan')
const { conectar } = require('./connection')
const Incidencia = require('./incidencia_model')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/incidencia', async (req, res) => {
  try {
    const incidencias = await Incidencia.findAll();
    res.send(incidencias)
  } catch (error) {
    return res.status(500).json(error)
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  conectar()
})
