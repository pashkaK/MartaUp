//Инициализируем слайдер
// let sliderSwiper = new Swiper('.swiper-container',{
let sliderSwiper = new Swiper('.swiper',{
    direction: 'vertical',
    //Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    
    //Навигация
    //Буллеты, текущее положение, прогрессбар
    
    pagination: {
        el: '.swiper-pagination',
        //буллеты
        clickable: true,
        // dynamicBullets: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIteraction: true
    },
    breakpoints: {// настройки для разных разрешений
        768: {
            // slidesPerView: 'auto',
            // spaceBetween: 8
        },
        // 991: {
        //     // slidesPerView: 2,
        //     spaceBetween: 30
        // },
        // 1192: {
        //     // slidesPerView: 3,
        //     spaceBetween: 20
        // }
    },
    // freeMode:false,

    // freeModeMomentum:true,

    // freeModeMomentumRatio: 1,

    // freeModeMomentumBounce:true,

    // freeModeMomentumBounceRatio: 1,

    // freeModeMomentumVelocityRatio: 1,

    // freeModeSticky:false,

    // freeModeMinimumVelocity: 0.02,

});

let sliderAutoRotation = document.querySelector('.swiper-wrapper');
let sliderRequestButton = document.querySelectorAll('.swiper-slide__btn');

sliderAutoRotation.addEventListener('mouseenter', function (e) {
    sliderSwiper.params.autoplay.disableOnIteraction = false;
    sliderSwiper.params.autoplay.delay = 2000;
    sliderSwiper.autoplay.start();
});
sliderAutoRotation.addEventListener('mouseleave', function(e) {
    sliderSwiper.autoplay.stop();
});