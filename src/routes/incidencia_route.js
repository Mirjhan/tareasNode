const express = require('express')
const router = express.Router()
const Incidencia = require('../../incidencia_model')


router.get('/', async (req, res) => {
    try {
        const incidencias = await Incidencia.findAll();
        res.send(incidencias)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/create', async (req, res) => {
    const { nombre, descripcion, estado } = req.body

    try {
        const nuevaIncidencia = await Incidencia.create({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado
        })
        res.status(200).json(nuevaIncidencia)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.put('/update', async (req, res) => {
    try {
        const { id, nombre, descripcion, estado } = req.body
        const result = await Incidencia.findByPk(id)
        result.set({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado
        })
        await result.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const incidenciaEliminada = await Incidencia.findByPk(id)
        await incidenciaEliminada.destroy()
        res.status(200).json({ message: 'Se elimino la incidencia', incidenciaEliminada })
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;