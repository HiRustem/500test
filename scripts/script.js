// menu
let isOpened = false

const headerBurgerButton = document.querySelector('.header__burger-button')
const headerBurgerButtonImage = document.querySelector('.header__burger-image')

const headerButton = document.querySelector('.header__button')
const headerDialog = document.querySelector('.header__dialog')
const headerCloseDialogButton = document.querySelector('.header__dialog-close')

const headerMenuContainer = document.querySelector('.header__menu-container')

const headerItems = document.querySelectorAll('.item_with_list')

headerItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    document.querySelector('.header').classList.add('header_shown')
  })

  item.addEventListener('mouseleave', function() {
    document.querySelector('.header').classList.remove('header_shown')
  })
})

function toggleMenu() {
  if (isOpened) {
    headerMenuContainer.style.display = 'none'
    headerBurgerButtonImage.src = './assets/images/burger.png'
    isOpened = false
  } else {
    headerMenuContainer.style.display = 'block'
    headerBurgerButtonImage.src = './assets/images/burger-close.png'
    isOpened = true
  }
}

headerBurgerButton.addEventListener('click', toggleMenu)

headerButton.addEventListener('click', function() {
  headerDialog.showModal()
})

headerCloseDialogButton.addEventListener('click', function() {
  headerDialog.close()
})


// slider

let currentProject = 0

const projects = document.querySelectorAll('.projects__slider-item')

const prevProjectsButton = document.querySelector('.projects__slider-button_prev')
const nextProjectsButton = document.querySelector('.projects__slider-button_next')


function prevProject() {
  projects[currentProject].classList.add('visually-hidden')

  if (currentProject === 0) {
    projects[projects.length - 1].classList.remove('visually-hidden')

    currentProject = projects.length - 1
  } else {
    projects[currentProject - 1].classList.remove('visually-hidden')

    currentProject -= 1
  }
}

function nextProject() {
  projects[currentProject].classList.add('visually-hidden')

  if (currentProject === projects.length - 1) {
    projects[0].classList.remove('visually-hidden')

    currentProject = 0
  } else {
    projects[currentProject + 1].classList.remove('visually-hidden')

    currentProject += 1
  }
}

prevProjectsButton.addEventListener('click', prevProject)
nextProjectsButton.addEventListener('click', nextProject)


// news

let currentNews = 0

const news = document.querySelectorAll('.news__posts-item')

const prevNewsButton = document.querySelector('.news__slider-button_prev')
const nextNewsButton = document.querySelector('.news__slider-button_next')

function prevNews() {
  news[currentNews].classList.add('news__posts-item_hidden')

  if (currentNews === 0) {
    news[news.length - 1].classList.remove('news__posts-item_hidden')

    currentNews = news.length - 1
  } else {
    news[currentNews - 1].classList.remove('news__posts-item_hidden')

    currentNews -= 1
  }
}

function nextNews() {
  news[currentNews].classList.add('news__posts-item_hidden')

  if (currentNews === news.length - 1) {
    news[0].classList.remove('news__posts-item_hidden')

    currentNews = 0
  } else {
    news[currentNews + 1].classList.remove('news__posts-item_hidden')

    currentNews += 1
  }
}

prevNewsButton.addEventListener('click', prevNews)
nextNewsButton.addEventListener('click', nextNews)

/* accordion */

const accordionItems = document.querySelectorAll('.answers-item')

function toggleAccordion(currentElement) {
  accordionItems.forEach(accordion => {
    const accordionText = accordion.querySelector('.answers-accordion__text')

    if (!accordionText.classList.contains('visually-hidden')) {
      accordionText.classList.add('visually-hidden')
    }
  })

  currentElement.querySelector('.answers-accordion__text').classList.remove('visually-hidden')
}

accordionItems.forEach(accordion => {
  accordion.querySelector('.answers-accordion__label').addEventListener('click', () => toggleAccordion(accordion))
})

/* mask */

const telInput = document.querySelector('.subscribe__tel-input')
console.log(telInput.value)

function setTelephone(event) {
  const telephone = event.target.value.replace('+7 ', '').replace(/[^0-9]/g, '')

  let telString = ''

  const cityCode = telephone.slice(0, 3)
  const firstTriple = telephone.slice(3, 6)
  const firstDouble = telephone.slice(6, 8)
  const secondDouble = telephone.slice(8, )

  if (cityCode.length > 0) {
    telString += `+7 (${cityCode}`
  }

  if (firstTriple.length > 0) {
    telString += `) ${firstTriple}`
  }

  if (firstDouble.length > 0) {
    telString += `-${firstDouble}`
  }

  if (secondDouble.length > 0) {
    telString += `-${secondDouble}`
  }

  telInput.value = telString
}

telInput.addEventListener('input', setTelephone)