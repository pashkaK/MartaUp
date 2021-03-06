let container = document.querySelector('.container');
let widthDevice = container.clientWidth;
let sliderTitle = document.querySelectorAll('.swiper-slide__title');
let headerActive = document.querySelector(".header__top");

for(let i = 0; i < sliderTitle.length; i += 1) {
    if (widthDevice < 598) {
        sliderTitle[i].innerHTML = `${"We Build Apps & Websites<br/>for Your Business"}`;
    }
}

if(widthDevice < 768 ) {
  document.addEventListener('scroll' , () => {
    headerActive.classList.toggle('header__active', window.pageYOffset > 30)
  })
}

// burger-menu
$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});

//btn-top function 
let btn = $('#button-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

