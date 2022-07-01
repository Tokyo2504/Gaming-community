import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
 Swiper.use([Navigation, Pagination, Autoplay]);

const gamesSlider = document.querySelector('.games__slider');

let slider = new Swiper(gamesSlider, {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
   },
  navigation: {
    nextEl: '.games-button-next',
    prevEl: '.games-button-prev',
  },
  pagination: {
    el: '.games__pag',
    type: 'bullets',
    clickable: true,
  },
});
