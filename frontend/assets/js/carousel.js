const initCarousel = (id) => {
  const carouselSlide = document.querySelector(`#${id} .carousel-slide`)
  const carouselItems = document.querySelectorAll(`#${id} .product`)

  const prev = document.querySelector(`#${id} .prev`)
  const next = document.querySelector(`#${id} .next`)

  let counter = 1
  const size = 1200

  next.addEventListener('click', () => {
    if (counter >= (carouselItems.length/4) - 1) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  })

  prev.addEventListener('click', () => {
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  })
}