const { getRecomendationList } = require('../services/GetRecomendationListService')

const index = async (req, res, next) => {
  try {
    const { MOSTPOPULAR_URL, PRICEREDUCTION_URL } = process.env
    const mostPopular = await getRecomendationList(MOSTPOPULAR_URL,'mostpopular')
    const priceReduction = await getRecomendationList(PRICEREDUCTION_URL, 'pricereduction')

    res.status(200).send({
      mostsPopular: mostPopular,
      priceReduction: priceReduction
    })
  } catch (err) {
    next(err)
  }
  

}

module.exports = {
  index
}