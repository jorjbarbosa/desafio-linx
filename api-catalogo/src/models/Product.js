const mongoose = require('mongoose')

const Product = mongoose.Schema({})

module.exports = mongoose.model('products', Product)