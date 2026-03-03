const express = require('express')
const router = express.Router()
const Incidencia = require('../../incidencia_model')
const { getIncidencia, createIncidencia, updateIncidencia, deleteIncidencia, createIncidenciaConImagen, updateIncidenciaConImagen } = require('../controllers/incidencia_controller')
const { uploadFileMiddleware } = require('../utils/middlewares/uploas_file_middleware')


router.get('/', getIncidencia)

router.post('/create', createIncidencia)

router.put('/update', updateIncidencia)

router.delete('/delete/:id', deleteIncidencia)

router.post('/createConImagen', uploadFileMiddleware({ destination: 'incidencia', nameField: 'imagen'}), createIncidenciaConImagen)

router.put('/updateConImagen', uploadFileMiddleware({destination: 'incidencia', nameField: 'imagen'}) , updateIncidenciaConImagen)
module.exports = router;