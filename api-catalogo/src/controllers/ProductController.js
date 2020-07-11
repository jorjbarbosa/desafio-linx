const showProductService = require('../services/products/ShowProductService')

class ProductController {
  static async show(req, res) {
    const response = await showProductService.show(req)
    return res.json(response)
  }
}

module.exports = ProductController