const mongoose = require('mongoose')

module.exports = {
  async connectDatabase() {
    try {
      await mongoose.connect('mongodb://mongo:27017/catalog', {
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