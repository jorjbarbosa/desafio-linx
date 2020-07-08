const mongoose = require('mongoose')

module.exports = {
  async connectDatabase() {
    try {
      await mongoose.createConnection('mongodb://localhost:27017/products', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log('Database Connected')
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  }
}