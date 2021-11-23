"use strict";

const smoothScroll = () => {
  const btnUp = document.querySelector(".smooth-scroll");
  const header = document.getElementById("header");
  const upperSections = document.querySelectorAll(
    "#navigation, #offer, #benefits"
  );

  btnUp.classList.add("animated");
  btnUp.style.opacity = "0";

  let totalHeight = 0;
  upperSections.forEach((item) => {
    let itemHeight = item.offsetHeight;
    totalHeight += itemHeight;
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= totalHeight) {
      if (btnUp.classList.contains("fadeOut")) {
        btnUp.classList.remove("fadeOut");
      }
      btnUp.classList.add("fadeIn");
    } else {
      btnUp.classList.remove("fadeIn");
      btnUp.classList.add("fadeOut");
    }
  });

  btnUp.addEventListener("click", () => {
    header.scrollIntoView({ block: "start", behavior: "smooth" });
  });
};

export default smoothScroll;
