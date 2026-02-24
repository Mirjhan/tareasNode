const express = require('express')
const router = express.Router()
const Incidencia = require('../../incidencia_model')
const { getIncidencia, createIncidencia, updateIncidencia, deleteIncidencia, } = require('../controllers/incidencia_controller')


router.get('/', getIncidencia)

router.post('/create', createIncidencia)

router.put('/update', updateIncidencia)

router.delete('/delete/:id', deleteIncidencia)

module.exports = router;