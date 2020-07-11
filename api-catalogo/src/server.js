const express = require('express')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('./config/swagger');

const app = express()
const { connectDatabase } = require('./config/database')

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())
app.use(cors())

connectDatabase()

app.use('/products', require('./routes/products'))

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Endpoint not found'
  })
  next()
})

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`)
})