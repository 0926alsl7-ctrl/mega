// const menuItems = document.querySelectorAll(".header_menu > ul > li");
// const headerChange = document.querySelector(".header_wrap");

// menuItems.forEach((li) => {
//   const down = li.querySelector(".header_menu_down");

//   li.addEventListener("mouseenter", () => {
//     headerChange.classList.add("header_over");
//     li.classList.add("check");

//     down.style.display = "block";
//     const h = down.scrollHeight;

//     requestAnimationFrame(() => {
//       down.style.height = h + "px";
//       down.style.paddingTop = "20px";
//       down.style.paddingBottom = "20px";
//       down.style.marginTop = "0";
//       down.style.marginBottom = "0";
//     });
//   });

//   li.addEventListener("mouseleave", () => {
//     headerChange.classList.remove("header_over");
//     li.classList.remove("check");

//     down.style.height = "0";
//     down.style.paddingBottom = "0";
//     down.style.paddingTop = "0";
//     down.style.marginTop = "0";
//     down.style.marginBottom = "0";

//     down.addEventListener("transitionend", function hide(e) {
//       if (e.propertyName === "height") {
//         down.style.display = "none";
//         down.removeEventListener("transitionend", hide);
//       }
//     });
//   });
// });
const menuItems = document.querySelectorAll(".header_menu > ul > li");
const headerChange = document.querySelector(".header_wrap");

menuItems.forEach((li) => {
  const down = li.querySelector(".header_menu_down");

  li.addEventListener("mouseenter", () => {
    headerChange.classList.add("header_over");
    li.classList.add("check");

    down.style.display = "block";
    const h = down.scrollHeight;
    down.style.height = h + "px";
    down.style.paddingBottom = "20px";
    down.style.paddingTop = "20px";
    down.style.marginTop = "0";
    down.style.marginBottom = "0";
  });

  li.addEventListener("mouseleave", () => {
    headerChange.classList.remove("header_over");
    li.classList.remove("check");

    down.style.display = "none";
    down.style.height = "1px";
    down.style.paddingBottom = "0";
    down.style.paddingTop = "0";
    down.style.marginTop = "0";
    down.style.marginBottom = "0";

    setTimeout(() => {
      down.style.overflow = "hidden";
      down.style.height = "auto";
      down.style.paddingBottom = "20px";
      down.style.paddingTop = "20px";
    }, 100);
  });
});
// // (2) 스크롤 이벤트

// document.addEventListener("DOMContentLoaded", () => {
//   const swiper = new Swiper(".swiper-container", {
//     loop: false,
//     speed: 700,
//     grabCursor: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     on: {
//       slideChange() {
//         updatePagination(swiper.activeIndex);
//       },
//     },
//   });

//   const bullets = document.querySelectorAll(".swiper-page li");
//   bullets.forEach((bullet, index) => {
//     bullet.addEventListener("click", () => {
//       swiper.slideTo(index);
//     });
//   });

//   function updatePagination(activeIndex) {
//     bullets.forEach((b, i) => {
//       b.classList.toggle("active", i === activeIndex);
//     });
//   }
//   updatePagination(0);

//   const mainWrap = document.querySelector(".main_wrap");
//   const sections = document.querySelectorAll(".cont_box");
//   const asideItems = document.querySelectorAll(".aside_menu_list");
//   const header = document.querySelector(".header_wrap");

//   let currentIndex = 0; // 현재 섹션 인덱스 저장 (0 = section1)

//   function updateHeader(index) {
//     if (index === 0) {
//       header.classList.remove("header_fixed");
//     } else {
//       header.classList.add("header_fixed");
//     }
//   }

//   function goToSection(index) {
//     currentIndex = index;
//     const offset = sections[index].offsetTop;

//     mainWrap.style.transform = `translateY(-${offset}px)`;
//     updateAsideMenu();
//     updateHeader(index);
//   }

//   function updateAsideMenu() {
//     asideItems.forEach((item, i) => {
//       item.classList.toggle("on", i === currentIndex);
//     });
//   }

//   document.querySelector(".scroll_down_icon").addEventListener("click", () => {
//     goToSection(1);
//   });

//   // === aside 클릭 시 이동 === //
//   asideItems.forEach((item, i) => {
//     item.addEventListener("click", () => {
//       goToSection(i);
//     });
//   });

//   // === 마우스 휠 이동 === //
//   let wheelLock = false;

//   window.addEventListener("wheel", (e) => {
//     if (wheelLock) return;
//     wheelLock = true;

//     if (e.deltaY > 0 && currentIndex < sections.length - 1) {
//       goToSection(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       goToSection(currentIndex - 1);
//     }

//     setTimeout(() => (wheelLock = false), 800);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: false,
    speed: 700,
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange() {
        updatePagination(swiper.activeIndex);
      },
    },
  });

  const bullets = document.querySelectorAll(".swiper-page li");
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      swiper.slideTo(index);
    });
  });

  function updatePagination(activeIndex) {
    bullets.forEach((b, i) => {
      b.classList.toggle("active", i === activeIndex);
    });
  }
  updatePagination(0);

  /* ===========================================
      2) 스크롤로 section 이동
  ==============================================*/

  const mainWrap = document.querySelector(".main_wrap");
  const sections = document.querySelectorAll(".cont_box");
  const asideItems = document.querySelectorAll(".aside_menu_list");
  const header = document.querySelector(".header_wrap");

  let currentIndex = 0;

  function updateHeader(index) {
    if (index === 0) {
      header.classList.remove("header_fixed");
    } else {
      header.classList.add("header_fixed");
    }
  }

  function goToSection(index) {
    currentIndex = index;

    const offset = sections[index].offsetTop;

    mainWrap.style.transform = `translateY(-${offset}px)`;

    updateAsideMenu();
    updateHeader(index);
  }

  function updateAsideMenu() {
    asideItems.forEach((item, i) => {
      item.classList.toggle("on", i === currentIndex);
    });
  }

  const scrollDown = document.querySelector(".scroll_down_icon");
  if (scrollDown) {
    scrollDown.addEventListener("click", () => {
      goToSection(1);
    });
  }

  asideItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      goToSection(i);
    });
  });

  let wheelLock = false;

  window.addEventListener("wheel", (e) => {
    if (wheelLock) return;
    wheelLock = true;

    if (e.deltaY > 0) {
      if (currentIndex < sections.length - 1) {
        goToSection(currentIndex + 1);
      }
    } else {
      if (currentIndex > 0) {
        goToSection(currentIndex - 1);
      }
    }

    setTimeout(() => (wheelLock = false), 700);
  });
});
