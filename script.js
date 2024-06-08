const swiper = new Swiper('.swiper', {// слайдер 1
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2, // Показываем два слайда одновременно
    spaceBetween: 5, // Расстояние между слайдами (при необходимости)
  
    // If we need pagination
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


const swiper1 = new Swiper('.swiper-container-1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
    pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar-1',
    },
});