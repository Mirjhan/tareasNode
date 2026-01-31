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

app.post('/incidencia/create', async(req, res) => {

  const {nombre, descripcion, estado } = req.body
  try {
    const nuevaIncidencia = await Incidencia.create({
      nombre : nombre,
      descripcion : descripcion,
      estado : estado
    })
    res.status(200).json(nuevaIncidencia)
  } catch (error) {
    return res.status(500).json(error)
  }
})

app.delete('/incidencia/delete/:id', async (req, res) => {
  const { id } = req.params
  try {
    const incidenciaEliminada = await Incidencia.findByPk(id)
    await incidenciaEliminada.destroy()
    res.status(200).json({message: 'Se elimino la incidencia', incidenciaEliminada})
  } catch (error) {
    res.status(500).json(error)
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  conectar()
})
