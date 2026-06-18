const Usuario = require('../models/usuario_model')

const getUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createUsuario = async (req, res) => {
    const {id_tipo_documento, id_tipo_usuario , nombre, apellidos, documento, direccion, telefono, email, password } = req.body
    try {
        const nuevoUsuario = await Usuario.create({
            id_tipo_usuario: id_tipo_usuario,
            id_tipo_documento: id_tipo_documento,
            nombre: nombre,
            apellidos: apellidos,
            documento: documento,
            direccion: direccion,
            telefono: telefono,
            email: email,
            password: password
        })
        return res.status(200).json(nuevoUsuario)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { id_tipo_documento, id_tipo_usuario, id, nombre, apellidos, documento, direccion, telefono, email, password } = req.body
        const result = await Usuario.findByPk(id)
        result.set({
            id_tipo_documento: id_tipo_documento,
            id_tipo_usuario: id_tipo_usuario,
            nombre: nombre,
            apellidos: apellidos,
            documento: documento,
            direccion: direccion,
            telefono: telefono,
            email: email,
            password: password
        })
        await result.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuarioEliminado = await Usuario.findByPk(id)
        await usuarioEliminado.destroy()
        return res.status(200).json(usuarioEliminado)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}