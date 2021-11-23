"use strict";

import { animate } from "./helpers";

const modal = () => {
  const headerModal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");
  const headerBtn = document.querySelector("#header .button");
  let closeBtn = document.querySelectorAll(
    ".header-modal__close, .services-modal__close"
  );
  const servicesModal = document.querySelector(".services-modal");
  const serviceBtns = document.querySelectorAll(".service-button");
  const galleryDocuments = document.querySelectorAll(".sertificate-document");

  const animateOpenedCertificates = (link) => {
    let targetHref = link;
    console.log(targetHref);
    let bigImgBlock = document.createElement("div");
    bigImgBlock.classList.add("modal-cert");
    bigImgBlock.innerHTML = `<img src="${targetHref}"> <span title="Close" class="header-modal__close">x</span>`;
    document.body.append(bigImgBlock);
    animateModalInto(bigImgBlock);
    closeBtn = document.querySelectorAll(
      ".header-modal__close, .services-modal__close"
    );
    closeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        animateModalOut();
      });
    });
  };

  const animateModalInto = (elem) => {
    if (elem.classList.contains("fadeOutLeftBig")) {
      elem.classList.remove("fadeOutLeftBig");
    } else if (overlay.classList.contains("fadeOut")) {
      overlay.classList.remove("fadeOut");
    }
    elem.classList.add("animated", "fadeInLeftBig");
    elem.style.display = "flex";
    overlay.classList.add("animated", "fadeIn");
    overlay.style.display = "flex";
  };

  const animateModalOut = () => {
    let activeModal = document.querySelector(".fadeInLeftBig");
    console.log(activeModal);
    activeModal.classList.remove("fadeInLeftBig");
    overlay.classList.remove("fadeIn");
    activeModal.classList.add("fadeOutLeftBig");
    overlay.classList.add("fadeOut");
    overlay.style.display = "";
  };

  headerBtn.addEventListener("click", () => {
    animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        animateModalInto(headerModal);
      },
    });

    closeBtn = document.querySelectorAll(
      ".header-modal__close, .services-modal__close"
    );
  });

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          animateModalInto(servicesModal);
        },
      });

      closeBtn = document.querySelectorAll(
        ".header-modal__close, .services-modal__close"
      );
    });
  });

  galleryDocuments.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let targetElHref = link.getAttribute("href");
      animateOpenedCertificates(targetElHref);
    });
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      animateModalOut();
    });
  });
};

export default modal;
