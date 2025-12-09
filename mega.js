const menuItems = document.querySelectorAll(".header_menu > ul > li");
const headerChange = document.querySelector(".header_wrap");

menuItems.forEach((li) => {
  const down = li.querySelector(".header_menu_down");
  li.addEventListener("mouseenter", () => {
    headerChange.classList.add("header_over");
    li.classList.add("check");
    down.style.height = "auto";
    down.style.marginTop = "0";
    down.style.marginBottom = "0";
    down.style.paddingTop = "20px";
    down.style.paddingBottom = "20px";
  });

  li.addEventListener("mouseleave", () => {
    headerChange.classList.remove("header_over");
    li.classList.remove("check");
    down.style.height = "1px";
    down.style.marginTop = "0";
    down.style.marginBottom = "0";
    down.style.paddingTop = "20px";
    down.style.paddingBottom = "20px";
    down.style.overflow = "hidden";
  });
});
// (2) Swiper ============================================
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
      1280: { slidesPerView: 1 },
      760: { slidesPerView: 2 },
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

// var section_main_swiper2 = new Swiper(".section_main_swiper2", {
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	loop: false,
// 	autoplay: false,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	on: {
// 		slideChange: function () {
// 			$(".section_main_swiper").find(".section_main_fade").toggleClass("fadeInUp");
// 			setTimeout(function() {
// 				$(".section_main_swiper").find(".section_main_fade").toggleClass("fadeInUp");
// 			}, 100);
// 		},
// 		activeIndexChange: function () {
// 		}
// 	}
// });
//   new Swiper(".section_menu_swiper", {
//     loop: false,
//     slidesPerView: 1,
//     spaceBetween: 15,
//     autoplay: {
//       delay: 5000,
//     },
//     breakpoints: {
//       1280: {
//         slidesPerView: 1,
//       },
//       760: {
//         slidesPerView: 2,
//       },
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     on: {
//       init: function () {},
//       slideChange: function () {
//         $(".section_menu_swiper").find(".inner_modal").hide(0);
//       },
//     },
//     onImagesReady: function (swiper) {
//       resizeSwiper();
//     },
//   });
// });

// (3) Fullpage ============================================
