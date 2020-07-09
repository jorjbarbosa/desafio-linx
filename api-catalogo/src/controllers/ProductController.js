const Product = require('../models/Product')

class ProductController {
  static async show(req, res) {
    try {
      const response = await Product.findOne({ id: req.params.id })
      const { type } = req.query
      if (type == 'compact') {
        const { name, price, categories, status } = response.toObject()
        return res.json({
          name,
          price,
          categories,
          status
        })
      } else if (type == 'complete') {
        return res.json(response)
      } 

      throw new Error('Invalide response type')
    } catch (err) {
      console.log(err)
      return res.json({
        msg: 'Ocorreu um erro ao buscar o produto',
      })
    }
  }
}

module.exports = ProductController