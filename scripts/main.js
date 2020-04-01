const swiper = new Swiper(".game__swiper-container", {
  slidesPerView: "auto"
});

const swiperContainer = document.getElementById("swiperContainer");
const DoneButton = document.getElementById("DoneButton");
const swiperOpen = document.getElementById("swiperDone");

swiperContainer.onclick = function() {
  if (swiperContainer.id == "swiperContainer") {
    swiperContainer.id += "Open";
    swiperOpen.id += "Open";
    swiper.update();
  }
};
DoneButton.onclick = function() {
  swiperContainer.id = "swiperContainer";
  swiperOpen.id = "swiperDone";
  swiper.update();
};

const reviewsSwiper = new Swiper(".game__reviews-swiper", {
  spaceBetween: 30,
  slidesPerView: "auto"
});

const navbarApp = document.getElementById("navbarApp");

window.onscroll = function() {
  document.getElementById("navbar").style.border =
    "1px solid rgba(117,117, 117, 0.2)";
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  if (winScroll >= 120) {
    navbarApp.id = "navbarAppOn";
  } else {
    document.getElementById("navbar").style.background =
      "rgba(255,255,255," + winScroll / 100 + ")";
    navbarApp.id = "navbarApp";
    document.getElementById("navbar").style.border = "none";
  }
};
