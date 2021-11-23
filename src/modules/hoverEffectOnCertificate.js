"use strict";

import { animate } from "./helpers";

const animateHover = () => {
  const certsLinks = document.querySelectorAll(".sertificate-document");

  certsLinks.forEach((link) => {
    const certImg = link.querySelector("img");
    const certOverlay = link.querySelector(".document-overlay");
    certOverlay.style.height = certImg.height + "px";
    certOverlay.style.width = certImg.width + "px";
    certOverlay.style.left = "auto";
    link.style.width = certImg.width + "px";

    link.addEventListener("mouseenter", () => {
      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          if (certOverlay.classList.contains("fadeOut")) {
            certOverlay.classList.remove("fadeOut");
          }
          certOverlay.style.opacity = "1";
          certOverlay.classList.add("animated", "fadeIn");
        },
      });
    });

    link.addEventListener("mouseleave", () => {
      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          certOverlay.style.opacity = "0";
          certOverlay.classList.remove("fadeIn");
          certOverlay.classList.add("fadeOut");
        },
      });
    });
  });
};

export default animateHover;
