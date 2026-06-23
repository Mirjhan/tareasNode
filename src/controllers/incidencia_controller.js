const Incidencia = require('../models/incidencia_model')

const getIncidencia = async (req, res) => {
    try {
        const incidencias = await Incidencia.findAll();
        return res.status(200).json(incidencias)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createIncidencia = async (req, res) => {
    const { nombre, descripcion, estado } = req.body

    try {
        const nuevaIncidencia = await Incidencia.create({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado
        })
        return res.status(200).json(nuevaIncidencia)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateIncidencia = async (req, res) => {
    try {
        const { id, nombre, descripcion, estado } = req.body
        const result = await Incidencia.findByPk(id)
        result.set({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado
        })
        await result.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteIncidencia = async (req, res) => {
    
    const { id } = req.params
    try {

        const incidenciaEliminada = await Incidencia.findByPk(id)
        await incidenciaEliminada.destroy()
        return res.status(200).json(incidenciaEliminada)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createIncidenciaConImagen = async (req, res) => {
    try {
        const { nombre, descripcion, estado } = req.body
        const { filename }= req.file
        const nuevaIncidencia = await Incidencia.create({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            imagen: filename,
        })
         return res.status(200).json(nuevaIncidencia)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const updateIncidenciaConImagen = async (req, res) => {
    try {
        const {id, nombre, descripcion, estado } = req.body
        const result = await Incidencia.findByPk(id)

        result.set({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
        })

        if (req.file) {
            result.imagen = req.file.filename
        }
        await result.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
        
    }
}
module.exports = {
    getIncidencia,
    createIncidencia,
    updateIncidencia,
    deleteIncidencia,
    createIncidenciaConImagen,
    updateIncidenciaConImagen
}