//Humburger
const humburger = document.querySelector('.hamburger')
const header_categories = document.querySelector('.header__categories--menu')
const header_category = document.querySelector('.header__categories--category')

if (humburger && header_categories && header_category) {
  header_categories.addEventListener('click', function() {
    humburger.classList.toggle('is-active')
    header_category.classList.toggle('header-category-active')
  })
}
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

// Filter

const filter_header = document.querySelectorAll('#filter_header')
const filter_submenu = document.querySelectorAll('#filter_submenu')
const filter_arrow_bottom = document.querySelectorAll('.filter__title--arrow img')

for(let i = 0, len = filter_header.length; i < len; i++) {
  let head = filter_header[i]
  head.addEventListener('click', function() {
    filter_submenu[i].classList.toggle('active-submenu')
    filter_submenu[i].classList.contains('active-submenu') ? filter_arrow_bottom[i].style.transform = 'rotate(180deg)' : filter_arrow_bottom[i].style.transform = 'rotate(0)'
  })
}


// address add modal

const address_add_btn = document.querySelector('.cart__address--add')
const address_add_modal = document.querySelector('.cart__address--modal')
let bgc = document.createElement('div')
bgc.className = 'bgc'

if(address_add_btn && address_add_modal) {
  address_add_btn.addEventListener('click', function() {
    address_add_modal.style.display = 'block'
    document.body.appendChild(bgc)
  })
  bgc.onclick = function() {
    address_add_modal.style.display = 'none'
    document.body.removeChild(bgc)
  }
}

// return modal

const account_delivered_return = document.querySelector('.account__product--return p')
const account_delivered_modal = document.querySelector('.account__return--modal')

if(account_delivered_modal && account_delivered_return) {
  account_delivered_return.addEventListener('click', function() {
    account_delivered_modal.style.display = 'block'
    document.body.appendChild(bgc)
  })
  bgc.onclick = function() {
    account_delivered_modal.style.display = 'none'
    document.body.removeChild(bgc)
  }
}

// reseller filter

const filter_blocks = document.querySelector('.filter__blocks')
const filter_body = document.querySelector('.filter__body')
const filter_block_item_icon = document.querySelector('.block__item--icon img')


if(filter_blocks && filter_body) {
  filter_blocks.addEventListener('click', function() {
    filter_body.classList.toggle('filter__body--active')
    if(filter_body.classList.contains('filter__body--active')) {
      filter_block_item_icon.style.transform = 'rotate(180deg)'
    } else {
      filter_block_item_icon.style.transform = 'rotate(0deg)'
    }
  })
}
