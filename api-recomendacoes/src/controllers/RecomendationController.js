const { getRecomendationList } = require('../services/GetRecomendationListService')
const { getListWithProducts } = require('../services/GetListWithProductsService')

const index = async (req, res, next) => {
  try {
    const { maxProducts } = req.query
    const { MOSTPOPULAR_URL, PRICEREDUCTION_URL } = process.env

    const mostPopular = await getRecomendationList(MOSTPOPULAR_URL, 'mostpopular')
    const priceReduction = await getRecomendationList(PRICEREDUCTION_URL, 'pricereduction')
    const mostPopularList = await getListWithProducts(mostPopular, maxProducts)
    const priceReductionList = await getListWithProducts(priceReduction, maxProducts)

    res.status(200).send({
      mostsPopular: mostPopularList,
      priceReduction: priceReductionList
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index
}