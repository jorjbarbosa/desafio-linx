const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Catálogo Linx',
      description: 'API de catálogo desenvolvida para o teste técnico da Linx',
      contact: {
        name: 'Jorge Barbosa'
      },
      servers: ['http://0.0.0.0:3000']
    }
  },
  apis: ['./src/server.js']
}

module.exports = swaggerOptions