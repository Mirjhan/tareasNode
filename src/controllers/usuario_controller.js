const Usuario = require('../models/usuario_model');
const getPromise = require('../utils/helpers');

const getUsuario = async (req, res) => {
    const [error, usuarios] = await getPromise(Usuario.findAll());
    if (error) return res.status(500).json(error)
    return res.status(200).json(usuarios)
}

const createUsuario = async (req, res) => {
    const { id_tipo_documento, id_tipo_usuario, nombre, apellidos, documento, direccion, telefono, email, password } = req.body
    const [error, nuevoUsuario] = await getPromise(Usuario.create({
        id_tipo_usuario: id_tipo_usuario,
        id_tipo_documento: id_tipo_documento,
        nombre: nombre,
        apellidos: apellidos,
        documento: documento,
        direccion: direccion,
        telefono: telefono,
        email: email,
        password: password
    }))
    if (error) return res.status(500).json(error)
    return res.status(200).json(nuevoUsuario)
}

const updateUsuario = async (req, res) => {
    const { id_tipo_documento, id_tipo_usuario, id, nombre, apellidos, documento, direccion, telefono, email, password } = req.body
    const [errB, usuario] = await getPromise(Usuario.findByPk(id))
    if (errB) return res.status(500).json('Error al buscar')
    if (!usuario) return res.status(404).json('Usuario no existw')
    usuario.set({
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
    const [errSave, _] = await getPromise(usuario.save())
    if (errSave) return res.status(500).json('Error al guardar')
    return res.status(200).json(usuario)

}

const deleteUsuario = async (req, res) => {
    const { id } = req.params

    const [errB, usuario] = await getPromise(Usuario.findByPk(id))
    if (errB) return res.status(500).json('Error al buscar')
    // if (errB != null)
    const [errDestroy, _] = await getPromise(usuario.destroy())
    if (errDestroy) return res.status(500).json('Error al eliminar')

    return res.status(200).json(usuario)
}

module.exports = {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}