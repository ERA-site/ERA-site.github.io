const sliderMain = new Swiper('.slider_main', {
      speed:800,
      freeMode: true,
      centeredSlides: true,
      mousewheel: true,
      parallax: true,
      breakpoints: {
            0: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
            },
            680: {
                  slidesPerView: 3.5,
                  spaceBetween: 60
            }
      }
})

const sliderBg = new Swiper('.slider_bg', {
      freeMode: true,
      centeredSlides: true,
      parallax: true,
      slidesPerView: 3.5,
      spaceBetween: 60
})

sliderMain.controller.control = sliderBg //синхронизация двух слайдеров

//Слишком много багов получается от этого
/*document.querySelectorAll('.slider__item').forEach(item =>{
      item.addEventListener('click',event => {
            item.classList.toggle('opened')
      })
})*/

let desc = document.querySelector('.description')
let texts = document.querySelectorAll('.health--text');
let headers = document.querySelectorAll('.health--part');
let activeIcon = document.querySelector('.health--part-icon');

sliderMain.on('slideChange', e => {
      console.log(e);
      texts.forEach((item,index)=>{
            item.style.opacity = 0;
            headers[index].style.opacity = 0
      })
      // sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
      texts[e.realIndex].style.opacity = 1;
      headers[e.realIndex].style.opacity = 1;
})