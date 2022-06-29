import Swiper, { Navigation } from 'swiper';
 Swiper.use([Navigation]);

const gamesSlider = document.querySelector('.games__slider');
const gamesSlider1 = document.querySelector('.games__slider1');

let slider = new Swiper(gamesSlider, {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

let slider1 = new Swiper(gamesSlider1, {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  initialSlide: 4,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});
