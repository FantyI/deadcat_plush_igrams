const navigation_block = document.querySelector('.navigation_block')
const blackout = document.querySelector('.blackout_navigate')

blackout.addEventListener('click', () => {
   document.body.classList.remove('visible_navigate')
})

const open_navigate = document.querySelector('.open_navigate')
open_navigate.addEventListener('click', () => {
   document.body.classList.toggle('visible_navigate')
})

