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
// (2) Scroll ============================================
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
});
// (3) Fullpage ============================================
// $(document).ready(function () {
//   $("body").addClass("main_body");
//   fullpage();
// });

// function fullpage() {
//   var AsideMenuList = $(".aside_menu_list");
//   $(".main").fullpage({
//     anchors: ["main", "menu", "franchise", "mega", "news", "foot"],
//     onLeave: function (index, nextIndex, direction) {
//       AsideMenuList.removeClass("on");
//       AsideMenuList.eq(nextIndex - 1).addClass("on");

//       if (nextIndex !== 1) {
//         $(".header_wrap").addClass("header_fixed");
//       } else {
//         $(".header_wrap").removeClass("header_fixed");
//       }

//       if (nextIndex == 3) {
//         player.playVideo();
//       }
//     },
//   });
// }

//풀페이지
// function fullpage() {
// 	var ChapList = $(".aside_menu_list");
// 	$(".main").fullpage({
// 		//responsiveWidth: 760,
// 		anchors: ["main", "menu", "franchise", "mega", "news", "foot"],
// 		onLeave: function(index, nextIndex, direction){
// 			ChapList.removeClass("on");
// 			ChapList.eq(nextIndex-1).addClass("on");

// 			$(".animation").removeClass("hidden");
// 			$(".animation_fade_up").addClass("animated fadeUp");
// 			$(".animation_fade_down").addClass("animated fadeInDown");
// 			$(".animation_slide_left").addClass("animated slideInLeft");
// 			$(".animation_slide_right").addClass("animated slideInRight");
// 			$(this).next().find(".animation").removeClass("hidden");
// 			$(this).next().find(".animation_fade_up").addClass("animated fadeUp");
// 			$(this).next().find(".animation_fade_down").addClass("animated fadeInDown");
// 			$(this).next().find(".animation_slide_left").addClass("animated slideInLeft");
// 			$(this).next().find(".animation_slide_right").addClass("animated slideInRight");
// 			$(this).prev().find(".animation").removeClass("hidden");
// 			$(this).prev().find(".animation_fade_up").addClass("animated fadeUp");
// 			$(this).prev().find(".animation_fade_down").addClass("animated fadeInDown");
// 			$(this).prev().find(".animation_slide_left").addClass("animated slideInLeft");
// 			$(this).prev().find(".animation_slide_right").addClass("animated slideInRight");

// 			if ( nextIndex !== 1 ) {
// 				$(".head_wrap").addClass("head_fixed");
// 			} else {
// 				$(".head_wrap").removeClass("head_fixed");
// 			}

// 			if ( nextIndex == 1 ) {
// 									}
// 			$(".cont_title_bg").removeClass("cont_title_bg_active");
// 		},
// 		afterLoad: function(index, nextIndex, direction){
// 			$(".animation").removeClass("hidden");
// 			$(".animation_fade_up").addClass("animated fadeInUp");
// 			$(".animation_fade_down").addClass("animated fadeInDown");
// 			$(".animation_slide_left").addClass("animated slideInLeft");
// 			$(".animation_slide_right").addClass("animated slideInRight");
// 			if ( $(this).prev().find(".animation").is("hidden") == false ) {
// 				$(this).prev().find(".animation").addClass("hidden");
// 				$(this).prev().find(".animation_fade_up").removeClass("animated fadeInUp");
// 				$(this).prev().find(".animation_fade_down").removeClass("animated fadeInDown");
// 				$(this).prev().find(".animation_slide_left").removeClass("animated slideInLeft");
// 				$(this).prev().find(".animation_slide_right").removeClass("animated slideInRight");
// 			}
// 			if ( $(this).next().find(".animation").is("hidden") == false ) {
// 				$(this).next().find(".animation").addClass("hidden");
// 				$(this).next().find(".animation_fade_up").removeClass("animated fadeInUp");
// 				$(this).next().find(".animation_fade_down").removeClass("animated fadeInDown");
// 				$(this).next().find(".animation_slide_left").removeClass("animated slideInLeft");
// 				$(this).next().find(".animation_slide_right").removeClass("animated slideInRight");
// 			}

// 			if ( nextIndex == 3 ) {
// 				player.playVideo();
// 			};

// 			$(".section").eq(nextIndex-1).find(".cont_title_bg").addClass("cont_title_bg_active");
// 		},
// 		afterRender: function(anchorLink, index){
// 			ChapList.each(function(idx){
// 				$(this).click(function(){
// 					$.fn.fullpage.moveTo(idx+1);
// 				});
// 			});
// 			$(".scroll_down_icon_wrap").click(function(){
// 				$.fn.fullpage.moveTo(2);
// 			});
// 		},
// 	});
// };

// $(".section_main_swiper .youtube").hide();
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
// 				var player29;
// 				var player21;

// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player('player', {
// 		width: '100%',
// 		videoId: "Ppe5NIRco8A",
// 		host: 'https://www.youtube.com',
// 		playerVars: { 'autoplay': 0, 'playsinline': 1, 'loop' :1, 'rel' :0, 'mute' :1, 'modestbranding' :1, 'autohide':1,'showinfo':0,'controls':0, },
// 		events: {
// 			'onReady' : onPlayerReady,
// 			'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
// 			'onStateChange': onPlayerStateChange,
// 		}
// 	});
// 						player29 = new YT.Player('player29', {
// 				width: '100%',
// 				videoId: "9VYx2IxjZPg",
// 				host: 'https://www.youtube.com',
// 				playerVars: { 'autoplay': 0, 'playsinline': 1, 'loop' :1, 'rel' :0, 'mute' :1, 'modestbranding' :1, 'autohide':1,'showinfo':0,'controls':0, },
// 				events: {
// 					'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
// 					'onStateChange': onPlayerStateChange,
// 				}
// 			});
// 						player21 = new YT.Player('player21', {
// 				width: '100%',
// 				videoId: "Gnv40Oifhc8",
// 				host: 'https://www.youtube.com',
// 				playerVars: { 'autoplay': 0, 'playsinline': 1, 'loop' :1, 'rel' :0, 'mute' :1, 'modestbranding' :1, 'autohide':1,'showinfo':0,'controls':0, },
// 				events: {
// 					'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
// 					'onStateChange': onPlayerStateChange,
// 				}
// 			});
// 			//로드시
// 	function onPlayerReady(event) {
// 		setTimeout(function() {
// 								$(".section_main_swiper .youtube").show();
// 		}, 500);
// 	}
// //퀄리티
// 	function onPlayerPlaybackQualityChange(event) {
// 		var playbackQuality = event.target.getPlaybackQuality();
// 		var suggestedQuality = "hd1080";

// 		if( playbackQuality !== "hd1080") {
// 			event.target.setPlaybackQuality( suggestedQuality );
// 		}
// 	}
// //종료 후
// 	function onPlayerStateChange(event) {
// 		if (event.data === 0) {
// 							}
// 	}
// }
// var played = false;
