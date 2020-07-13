const getProducts = () => {
  fetch('http://localhost:4000/recomendations?maxProducts=16')
    .then(response => response.json())
    .then(data => {
      renderProducts(data.mostsPopular, 'mostpopular')
      renderProducts(data.priceReduction, 'pricereduction')
    })
    .catch(err => console.log(err))
    .finally(() => {
      initCarousel('mostpopular')
      initCarousel('pricereduction')
    })
} 

const renderProducts = (data, type) => {
  const carousel = document.querySelector(`#${type} .carousel-slide`)
  data.map((product, index) => {
    const item = `<div class="products">
                    <div class="product">
                      <img src="http://${product.images.default}" class="product-image" alt="">
                      <h4 class="product-name">${truncateString(product.name, 70)}</h4>
                      <p class="product-old-price">${formatarValor(product.oldPrice)}</p>
                      <p>Por <span class="price-span">${formatarValor(product.price)}</span></p>
                      <p>${product.installment.count}x ${formatarValor(product.installment.price)}</p>
                      <span class="${type == 'mostpopular' ? 'mostpopular-label' : 'pricereduction-label'}">${type === 'mostpopular' ? (index + 1) + 'º'  : getDiscount(product.oldPrice, product.price)}</span>
                    </div>
                  </div>`
    carousel.innerHTML += item
  })
}

getProducts()

const truncateString = (str, num) => {
  if (str.length <= num)
    return str
  
    return str.slice(0, num) + '...'
}

const formatarValor = (valor) => {
  return parseFloat(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

const getDiscount = (oldValue, newValue) => {
  const discount = (((newValue - oldValue)/oldValue)*100).toFixed(0)
  return `${discount}%`
}