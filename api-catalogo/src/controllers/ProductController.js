const Product = require('../models/Product')

class ProductController {
  static async show(req, res) {
    try {
      const response = await Product.findOne({id: req.params.id})
      return res.json(response)
    } catch (err) {
      return res.json({
        msg: 'Produto não encontrado'
      })
    }
  }
}

module.exports = ProductController