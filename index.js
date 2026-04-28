// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const projectFilterBtns = document.querySelectorAll('.projects__filter-btn')
const projectRows = document.querySelectorAll('.projects__row')

projectFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    projectFilterBtns.forEach(b => b.classList.remove('projects__filter-btn--active'))
    btn.classList.add('projects__filter-btn--active')

    const filter = btn.dataset.filter
    projectRows.forEach(row => {
      const match = filter === 'all' || row.dataset.category === filter
      row.style.opacity = '0'
      row.style.transform = 'translateY(8px)'
      if (match) {
        row.style.display = 'grid'
        requestAnimationFrame(() => {
          row.style.transition = 'opacity .35s ease, transform .35s ease'
          row.style.opacity = '1'
          row.style.transform = 'translateY(0)'
        })
      } else {
        row.style.transition = 'none'
        row.style.display = 'none'
      }
    })
  })
})

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
