const express = require('express')
const cors = require('cors')
const app = express()
const { connectDatabase } = require('./config/database')

app.use(express.json())
app.use(cors())

// connectDatabase()

app.use('/products', require('./routes/products'))

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Endpoint not found'
  })
  next()
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})