const axios = require('axios')
const redis = require('async-redis')
const client = redis.createClient({
  host: 'redis'
})

const getProductInfo = async (product) => {
  try {
    const { id } = product.recommendedProduct

    const redisData = await client.get(id)
    
    if (!redisData) {
      const { data } = await axios.get(`${process.env.CATALOG_API}/products/${id}`)
      client.setex(id, 10 * 60, JSON.stringify(data))
      return data
    }

    return JSON.parse(redisData)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getProductInfo
}