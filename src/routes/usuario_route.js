const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario_model')
const { getUsuario, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuario_controller')

router.get('/', getUsuario)

router.post('/create', createUsuario)

router.put('/update', updateUsuario)

router.delete( '/delete/:id', deleteUsuario)

module.exports =router;