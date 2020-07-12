const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    msg: 'Ocorreu um erro inesperado'
  })
}

module.exports = errorHandler