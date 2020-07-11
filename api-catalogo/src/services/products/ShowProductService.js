const Product = require('../../models/Product')

class ShowProductService {
  static async show(req) {
    try {
      const { id } = req.params
      const { type } = req.query
      const product = await Product.findOne({ id })
      
      if (type == 'compact') {
        const { name, price, categories, status } = product.toObject()
        return {
          name,
          price,
          categories,
          status
        }
      }
      return product
    } catch (err) {
      console.log(err)
      return {
        msg: 'Ocorreu um erro ao buscar o produto'
      }
    }
  }
}

module.exports = ShowProductService