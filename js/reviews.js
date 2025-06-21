const right_btn_vk = document.querySelector('.right_vk')
const left_btn_vk = document.querySelector('.left_vk')

const reviewsBlock_vk = document.querySelector('.reviews_vk')

left_btn_vk.addEventListener('click', () => {
   reviewsBlock_vk.scrollBy(-800, 0)
})

right_btn_vk.addEventListener('click', () => {
   reviewsBlock_vk.scrollBy(800, 0)
})


const right_btn_tg = document.querySelector('.right_tg')
const left_btn_tg = document.querySelector('.left_tg')

const reviewsBlock_tg = document.querySelector('.reviews_tg')

left_btn_tg.addEventListener('click', () => {
   reviewsBlock_tg.scrollBy(-800, 0)
})

right_btn_tg.addEventListener('click', () => {
   reviewsBlock_tg.scrollBy(800, 0)
})
