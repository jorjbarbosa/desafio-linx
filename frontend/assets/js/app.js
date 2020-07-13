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
  data.map((product) => {
    const item = `<div class="products">
                    <div class="product">
                      <img src="http://${product.images.default}" class="product-image" alt="">
                      <h4 class="product-name">${truncateString(product.name, 70)}</h4>
                      <p class="product-old-price">R$ ${product.oldPrice}</p>
                      <p>Por <span class="price-span">${product.price}</span></p>
                      <p>${product.installment.count}x R$ ${product.installment.price}</p>
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