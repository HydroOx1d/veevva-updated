const humburger = document.querySelector('.hamburger')
const header_categories = document.querySelector('.header__categories')

header_categories.addEventListener('click', function() {
  humburger.classList.toggle('is-active')
})