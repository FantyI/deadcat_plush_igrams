const right_btn = document.querySelector('.right__1')
const left_btn = document.querySelector('.left__1')

const reviewsBlock = document.querySelector('.reviews__1')

left_btn.addEventListener('click', () => {
   reviewsBlock.scrollBy(-800, 0)
})

right_btn.addEventListener('click', () => {
   reviewsBlock.scrollBy(800, 0)
})