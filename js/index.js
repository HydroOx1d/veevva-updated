//Humburger
const humburger = document.querySelector('.hamburger')
const header_categories = document.querySelector('.header__categories')

header_categories.addEventListener('click', function() {
  humburger.classList.toggle('is-active')
})

// categories
const categories_btn = document.querySelectorAll('.categories__category--title')
const categories_list = document.querySelectorAll('.categories__category--list')

for(let i = 0; i < categories_btn.length; i++) {
  let btn = categories_btn[i]
  btn.addEventListener('click', function() {
    for(let j = 0; j < categories_btn.length; j++) {
      if(i != j) {
        categories_list[j].classList.remove('list-active')
      }
    }
    categories_list[i].classList.toggle('list-active')
  })
}

document.body.addEventListener('click', function(e) {
  for(let i = 0; i < categories_btn.length; i++) {
    if(!categories_btn[i].contains(e.target) && !categories_list[i].contains(e.target)) {
      categories_list[i].classList.remove('list-active')
    }
  }
})