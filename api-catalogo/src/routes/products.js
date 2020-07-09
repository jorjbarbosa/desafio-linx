const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/:id', ProductController.show)

module.exports = router