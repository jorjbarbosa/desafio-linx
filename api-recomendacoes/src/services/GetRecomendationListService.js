const axios = require('axios')
const redis = require('async-redis')
const client = redis.createClient()

const getRecomendationList = async (route, type) => {
  try {
    const redisData = await client.get(type)
    if (!redisData) {
      const { data } = await axios.get(route)
      await client.setex(type, 10 * 60, JSON.stringify(data))
      return data
    }
    return JSON.parse(redisData)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getRecomendationList
}