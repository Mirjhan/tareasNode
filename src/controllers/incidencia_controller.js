const Incidencia = require('../models/incidencia_model');
const getPromise = require('../utils/helpers');

const getIncidencia = async (req, res) => {
        const [error, incidencias] = await getPromise(Incidencia.findAll());
        if(error) return res.status(500).json(error)
        return res.status(200).json(incidencias)  
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
        const [errB, incidencia ] = await getPromise(Incidencia.findByPk(id))
        if(errB) return res.status(500).json('Error al buscar')
        const [errDestroy, _] = await getPromise(incidencia.destroy()) 
        if(errDestroy) return res.status(500).json('Error al eliminar')
        return res.status(200).json(incidencia)
}

const createIncidenciaConImagen = async (req, res) => {
        const { nombre, descripcion, estado } = req.body
        const { filename }= req.file
        const [error, nuevaIncidencia] = await getPromise(Incidencia.create({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            imagen: filename,
        })) 
        if(error) return res.status(500).json(error)
         return res.status(200).json(nuevaIncidencia)
}

const updateIncidenciaConImagen = async (req, res) => {
        const {id, nombre, descripcion, estado } = req.body
        const [errB, incidencia] = await getPromise(Incidencia.findByPk(id))
        if(errB) return res.status(500).json('Error al buscar')
            if(!incidencia) return res.status(404).json('Incidencia no existe') 

        incidencia.set({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
        })

        if (req.file) {
            result.imagen = req.file.filename
        }
        const [errSave, _] = await getPromise(incidencia.save()) 
        if(errSave) return res.status(500).json('Error al guardar')
        return res.status(200).json(incidencia)
}
module.exports = {
    getIncidencia,
    createIncidencia,
    updateIncidencia,
    deleteIncidencia,
    createIncidenciaConImagen,
    updateIncidenciaConImagen
}