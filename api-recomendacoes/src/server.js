const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('API de recomendações')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('API de rocomendações Rodando')
})