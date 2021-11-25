"use strict";

const smoothScroll = () => {
  const btnUp = document.querySelector(".smooth-scroll");
  const header = document.getElementById("header");
  const upperSections = document.querySelectorAll(
    "#navigation, #offer, #benefits"
  );

  let totalHeight = 0;
  upperSections.forEach((item) => {
    let itemHeight = item.offsetHeight;
    totalHeight += itemHeight;
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= totalHeight) {
      btnUp.style.opacity = "1";
    } else {
      btnUp.style.opacity = "";
    }
  });

  btnUp.addEventListener("click", () => {
    header.scrollIntoView({ block: "start", behavior: "smooth" });
  });
};

export default smoothScroll;
