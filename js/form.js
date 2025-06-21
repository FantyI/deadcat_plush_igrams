const blackout_form = document.querySelector('.blackout_form')
blackout_form.addEventListener('click', () => {
   document.body.classList.remove('visible_form')
})

const application = document.querySelector('.application__1')
application.addEventListener('click', () => {
   document.body.classList.toggle('visible_form')
})

const close = document.querySelector('.close')
close.addEventListener('click', () => {
   document.body.classList.remove('visible_form')
})
