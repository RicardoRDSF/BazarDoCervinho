function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px'
}).reveal(`#home, 
           #home stats,
           #home img,
           #products,
           #products header,
           #products .card,
           #about,
           #about header`)

function play() {
  var audio = document.getElementById('audio')
  audio.play()
}
