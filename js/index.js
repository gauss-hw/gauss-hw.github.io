$(function () {

  var swiper1 = new Swiper(".mySwiperv1", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
      },

    }
  });

})


$('.nav-new .li a').on("click", function () {
  let headerH = 80;//导航栏高度，滚动偏移量
  let nowActive = $.attr(this, 'href').substr(1, $.attr(this, 'href').length);//获取当前a标签href除#外的字符
  $('html, body').animate({
    scrollTop: $("#" + nowActive).offset().top - headerH
  }, 400);
  return false;//返回false，不修改url，返回true修改url
});








$(function () {
  if ($(window).width() < 993) {
    // 导航
    $("#mob-menubtn").on("click", function () {
      $('.main-header').addClass('open');
      $('#close-menubtn').show();
      $('#mob-menubtn').hide();
      $('body').css('overflow', 'hidden')
      // $('.logo img').attr('src', './img/logo.svg');
    })
    $("#close-menubtn").on("click", function () {
      closeMenu()
    })

    $(".one-nav").on("click", function () {
      closeMenu()
    })

    //mob端关闭导航
    function closeMenu() {
      // $('.nav-new').removeClass('active')
      $('.main-header').removeClass('open');
      $('#close-menubtn').hide();
      $('#mob-menubtn').show();

      $('body').css('overflow', 'auto')
      // $('.logo img').attr('src', './img/logo.svg');
      if ($(".bz-header").hasClass('fix')) {
        // $('.logo img').attr('src', './img/logo.svg');
      }
    }

    // keynotes 文字展开、关闭
    $(".z_sec7 .slide_txt_box").on("click", function () {
      $(this).toggleClass("active");
    })
  }

})


