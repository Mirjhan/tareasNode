
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const setMiddlewares = (app) => {
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/public', express.static('public'))
}

module.exports = setMiddlewares