const menuItems = document.querySelectorAll(".main-menu > li");
const subCols = document.querySelectorAll(".submenu-area .submenu");

menuItems.forEach((item) => {
  const index = item.dataset.index;

  item.addEventListener("mouseenter", () => {
    menuItems.forEach((li) => (li.style.backgroundColor = "transparent"));
    subCols.forEach((col) => (col.style.backgroundColor = "transparent"));

    item.style.backgroundColor = "#fdd000";

    if (subCols[index]) {
      subCols[index].style.backgroundColor = "#fdd000";
    }
  });
});
document.querySelector("header").addEventListener("mouseleave", () => {
  menuItems.forEach((li) => (li.style.backgroundColor = "transparent"));
  subCols.forEach((col) => (col.style.backgroundColor = "transparent"));
});

// swiper

document.addEventListener("DOMContentLoaded", () => {
  // === 스와이퍼 === //
  const swiper = new Swiper(".swiper-container", {
    loop: false,
    speed: 700,
    grabCursor: true,
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

  // === 섹션 이동 기능 === //
  const mainWrap = document.querySelector(".main_wrap");
  const sections = document.querySelectorAll(".cont_box");
  const asideItems = document.querySelectorAll(".aside_menu_list");
  const header = document.querySelector("header"); // ★ header 가져오기

  let currentIndex = 0; // 현재 섹션 인덱스 저장 (0 = section1)

  // === 헤더 업데이트 함수 === //
  function updateHeader(index) {
    if (index === 0) {
      header.classList.remove("fixed");
    } else {
      // section1일 때만 원래 상태
      header.classList.add("fixed");
    }
  }

  // === 특정 섹션으로 이동 === //
  function goToSection(index) {
    currentIndex = index;
    const offset = sections[index].offsetTop;

    mainWrap.style.transform = `translateY(-${offset}px)`;
    updateAsideMenu();
    updateHeader(index); // ★ 이동할 때마다 자동으로 헤더 업데이트
  }

  // === aside 'on' 업데이트 === //
  function updateAsideMenu() {
    asideItems.forEach((item, i) => {
      item.classList.toggle("on", i === currentIndex);
    });
  }

  // === Scroll Down 버튼 → section2 이동 === //
  document.querySelector(".scroll_down_icon").addEventListener("click", () => {
    goToSection(1);
  });

  // === aside 클릭 시 이동 === //
  asideItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      goToSection(i);
    });
  });

  // === 마우스 휠 이동 === //
  let wheelLock = false;

  window.addEventListener("wheel", (e) => {
    if (wheelLock) return;
    wheelLock = true;

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      goToSection(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      goToSection(currentIndex - 1);
    }

    setTimeout(() => (wheelLock = false), 800);
  });
});
