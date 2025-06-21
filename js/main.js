const right_btn = document.querySelector('.right')
const left_btn = document.querySelector('.left')

const reviewsBlock = document.querySelector('.reviews')

left_btn.addEventListener('click', () => {
   reviewsBlock.scrollBy(-800, 0)
})

right_btn.addEventListener('click', () => {
   reviewsBlock.scrollBy(800, 0)
})