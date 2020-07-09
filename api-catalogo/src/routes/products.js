const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

/**
 * @swagger
 * /products/{id}:
 * get:
 *  description: Retorna os dados de um produto conforme o ID passado como parametro
 *  responses: 
 *    '200':
 *      description: Produto retornado com sucesso
 */
router.get('/:id', ProductController.show)

module.exports = router