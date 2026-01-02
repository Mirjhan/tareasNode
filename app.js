const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
