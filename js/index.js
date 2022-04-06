//Humburger
const humburger = document.querySelector('.hamburger')
const header_categories = document.querySelector('.header__categories--menu')
const header_category = document.querySelector('.header__categories--category')
const header_category_close = document.querySelector('.header__category--close')

if (humburger && header_categories && header_category && header_category_close) {
  header_categories.addEventListener('click', function() {
    humburger.classList.toggle('is-active')
    header_category.classList.toggle('header-category-active')
    if(document.body.offsetWidth < 576) {
      if(header_category.classList.contains('header-category-active')) {
        document.body.style.overflow = 'hidden'
      }
    }
  })
  header_category_close.addEventListener('click', function() {
    humburger.classList.remove('is-active')
    header_category.classList.remove('header-category-active')
    if(!header_category.classList.contains('header-category-active')) {
      document.body.style.overflow = 'auto'
    }
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


// orders customer status

const status_set = document.querySelector('.customer__status--set')
const status_variant = document.querySelector('.customer__status--variant')

if(status_set && status_variant) {
  status_set.addEventListener('click', function() {
    status_variant.classList.toggle('active-variant')
  })
}

// open color

const options_variant_field = document.querySelector('.options__variant--field.has-color')
const options_color_list = document.querySelector('.options__color--list')
const options_variant_icon = document.querySelector('.options__variant--icon')

if(options_variant_field && options_color_list) {
  options_variant_field.addEventListener('click', function() {
    options_color_list.classList.toggle('is-color-list')
    if(options_color_list.classList.contains('is-color-list')) {
      options_variant_icon.style.transform = 'rotate(180deg)'
    } else {
      options_variant_icon.style.transform = 'rotate(0deg)'
    }
  })
}

// open title list

const options_field_head = document.querySelector('.options__field--head')
const options_field_head_text = document.querySelector('.options__field--head span')
const options_field_list = document.querySelector('.options__field--list')
const options_field_item = document.querySelectorAll('.options__field--item')

if(options_field_head && options_field_head_text && options_field_list && options_field_item) {
  options_field_head.addEventListener('click', function() {
    options_field_list.classList.toggle('is-field-list')
    if(options_field_list.classList.contains('is-field-list')) {
      options_variant_icon.style.transform = 'rotate(180deg)'
    } else {
      options_variant_icon.style.transform = 'rotate(0deg)'
    }
  })

  for(let i = 0; i < options_field_item.length; i++) {
    let item = options_field_item[i]
    item.addEventListener('click', function(e) {
      options_field_head_text.textContent = e.target.textContent
      options_field_list.classList.remove('is-field-list')
      if(options_field_list.classList.contains('is-field-list')) {
        options_variant_icon.style.transform = 'rotate(180deg)'
      } else {
        options_variant_icon.style.transform = 'rotate(0deg)'
      }
    })
  }
}

// form addvariants body open

const form_addvariants_toggle = document.querySelector('.form__addvariants--toggle')
const form_addvariants_body = document.querySelector('.form__addvariants--body')
const form_addvariants_icon = document.querySelector('.form__addvariants--icon')

if(form_addvariants_body && form_addvariants_toggle) {
  form_addvariants_toggle.addEventListener('click', function() {
    form_addvariants_body.classList.toggle('is-addvariants-active')
    if(form_addvariants_body.classList.contains('is-addvariants-active')) {
      form_addvariants_icon.style.transform = 'rotate(180deg)'
    } else {
      form_addvariants_icon.style.transform = 'rotate(0deg)'
    }
  })
}

// faq items

const accordion_item = document.querySelectorAll('.accordion_item')
const accordion_head = document.querySelectorAll('.accordion_head')
const accordion_body = document.querySelectorAll('.accordion_body')

if(accordion_item && accordion_body && accordion_head) {
  for(let i = 0; i < accordion_item.length; i++) {
    let item = accordion_item[i]
    item.addEventListener('click', function() {
      accordion_head[i].classList.toggle('active')
      accordion_body[i].classList.toggle('active')
      if(accordion_body[i].innerText === "") {
        accordion_head[i].classList.remove('active')
        accordion_body[i].classList.remove('active')
      }
    })
  }
}