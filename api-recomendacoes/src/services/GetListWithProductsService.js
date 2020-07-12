const { getProductInfo } = require('./GetProductInfoService')

const getListWithProducts = async (list, max = 10) => {
  try {
    max = max >= 10 ? max : 10

    const products = await Promise.all(
      list.map(async product => {
        const response = await getProductInfo(product)
        return response
      })
    )

    const response = products.filter((product) => {
      return product && product.status == 'AVAILABLE'
    })

    return response.slice(0, max)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getListWithProducts
}