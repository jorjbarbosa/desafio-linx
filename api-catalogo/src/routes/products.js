const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/:id', async (req, res) => {
  try {
    const response = await Product.findOne({ "id": req.params.id });
    return res.json(response);
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Tivemos um problema para retornar os dados do produto!' });
  }
})

module.exports = router