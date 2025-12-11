// (1) 헤더 - 메뉴 다운 ============================================
$(".header_wrap .header .header_menu > ul > li").hover(
  function () {
    if ($(".header_menu_wrap").is(".right0") == false) {
      $(".header_wrap .header .header_menu > ul > li").removeClass("check");
      $(this).addClass("check");
      $(".header_menu_down").stop().slideDown("fast");
    }
  },
  function () {
    $(".header_wrap .header .header_menu > ul > li").removeClass("check");
  }
);

$(".header_wrap").hover(
  function () {
    $(this).addClass("header_over");
  },
  function () {
    if ($(".header_menu_wrap").is(".right0") == false) {
      $(this).removeClass("header_over");
      $(".header_wrap .header .header_menu > ul > li").removeClass("check");
      $(".header_menu_down").stop().slideUp("fast");
    }
  }
);
// (2) 헤더 - 모바일 헤더 ============================================
$(".mobile_menu_icon").click(function () {
  $(".header_wrap").addClass("header_over");
  $(this).toggleClass("mobile_menu_icon_open");
  if ($(this).is(".mobile_menu_icon_open")) {
    $(".header_menu_wrap").addClass("right0");
  } else {
    $(".header_menu_wrap").removeClass("right0");
  }
});
$(".head_menu_down").click(function () {
  $(this).toggleClass("head_menu_down_open");
  if ($(this).is(".head_menu_down_open")) {
    $(this).next(".header_menu_down").find("ul").slideDown("fast");
  } else {
    $(this).next(".header_menu_down").find("ul").slideUp("fast");
  }
});
// (3) 헤더 - 모바일 아이콘 / 사이즈 조정 / 스크롤 오픈 ============================
cont_gallery_list_img();
$(window).resize(function () {
  $(".header_menu_down > ul").css("display", "block");
  if ($(window).width() < 760) {
    $(".header_menu_down > ul").css("display", "none");
  }
  $(".head_menu_down").removeClass("head_menu_down_open");
  if ($(window).width() >= 1280) {
    $(".header_wrap").removeClass("header_over");
    $(".header_menu_wrap").removeClass("right0");
    $(".mobile_menu_icon").removeClass("mobile_menu_icon_open");
  }
  cont_gallery_list_img();
});

$(window).scroll(function () {
  if ($(document).scrollTop() > $(".cont_wrap").offset().top) {
    $(".header_wrap").addClass("header_fixed");
  } else {
    $(".header_wrap").removeClass("header_fixed");
  }
});
// (4) 갤러리 - 이미지 사이즈 조정 ============================
function cont_gallery_list_img() {
  $(".cont_gallery_list > ul > li").each(function () {
    if ($(this).find(".cont_gallery_list_img").length) {
      $(this).find(".cont_gallery_list_img").css("width", $(this).width());
    }

    if ($(this).find(".cont_gallery_list_img_height").length) {
      $(this)
        .find(".cont_gallery_list_img_height")
        .css("height", $(this).width());
    } else {
      $(this).find(".cont_gallery_list_img").css("height", $(this).width());
    }
  });
}
// (5) nav quick 메뉴 ====================================
function quick(ele) {
  $(ele).parents(".nav_wrap").find(".nav").fadeToggle("fast");
  $(".nav_wrap .nav_quick_title, .nav_wrap .nav_quick_close").slideToggle(
    "fast"
  );
}

// (6) Swiper ============================================
document.addEventListener("DOMContentLoaded", () => {
  const mainSwiper1 = new Swiper(".section_main_swiper1", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    on: {
      init: function () {},
    },
    slideChange: function () {
      document
        .querySelectorAll(".section_main_swiper .section_main_fade")
        .forEach((el) => el.classList.toggle("fadeInUp"));
      setTimeout(function () {
        document
          .querySelectorAll(".section_main_swiper .section_main_fade")
          .forEach((el) => el.classList.toggle("fadeInUp"));
      }, 100);
      if (
        $(".section_main_swiper1 .swiper-slide")
          .eq(this.activeIndex)
          .is(".swiper-slide-youtube")
      ) {
      }
    },
    activeIndexChange: function () {},
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const SectionMenuSwiper = new Swiper(".section_menu_swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: { delay: 5000 },

    breakpoints: {
      0: { slidesPerView: 2 },
      760: { slidesPerView: 1 },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      init: function () {},

      slideChange: function () {
        document
          .querySelectorAll(".section_menu_swiper .inner_modal")
          .forEach((el) => {
            el.style.display = "none";
          });
      },
    },
  });
});
