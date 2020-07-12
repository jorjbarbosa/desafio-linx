const express = require('express')
const cors = require('cors')
// const errorHandler = require('../middlewares/error-handler')

const app = express()

app.use(cors())
app.use(express.json())

const { SERVER_HOST, SERVER_PORT } = process.env

app.use('/recomendations', require('./routes/recomendations'))

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`API de rocomendações Rodando na porta ${SERVER_PORT}`)
})