"use strict";

import { animate } from "./helpers";

const slider = () => {
  const benefitsWrap = document.querySelector(".benefits-wrap");
  let benefitsItems = document.querySelectorAll(".benefits__item");

  let maxArray = [];
  let max = 0;
  let benefitsItemMargin = 0;
  let totalSliderWidth = 0;
  let nextSlide;
  let currentSlide = 0;

  const sliderItemsWrap = document.createElement("div");
  sliderItemsWrap.classList.add("slider-items-wrap");

  benefitsItems[benefitsItems.length - 1].classList.add("active");

  benefitsItems.forEach((item) => {
    item.style.margin = "0 4% ";
    let itemWidth = item.offsetWidth;
    maxArray.push(itemWidth);

    max = Math.max(...maxArray);
    sliderItemsWrap.prepend(item);
    return max;
  });

  maxArray.forEach((item) => {
    totalSliderWidth += item;
    return totalSliderWidth;
  });

  sliderItemsWrap.style.width = totalSliderWidth + "px";

  benefitsWrap.append(sliderItemsWrap);

  const autoplay = () => {
    benefitsItems = document.querySelectorAll(".benefits__item");
    let notActiveSlides;
    let clonedItem;
    benefitsItemMargin += max;

    benefitsItems.forEach((item, index) => {
      if (item.classList.contains("active")) {
        currentSlide = index;
        nextSlide = currentSlide++;
        item.classList.remove("active", "cloned");
        item.classList.add("prev");
        clonedItem = item.cloneNode(true);
        clonedItem.classList.add("cloned");
        clonedItem.classList.remove("prev");
        sliderItemsWrap.append(clonedItem);
      }
      console.log(benefitsItems);
      return currentSlide;
    });

    benefitsItems[currentSlide].classList.add("active");
    sliderItemsWrap.style.transform = `translate(-${benefitsItemMargin}px, 0)`;

    notActiveSlides = document.querySelectorAll(".prev");
    if (notActiveSlides.length >= maxArray.length + 1) {
      notActiveSlides.forEach((elem, index) => {
        if (index <= maxArray.length - 1) {
          elem.remove();
          let margin;
          margin += elem.offsetWidth;
          benefitsItemMargin = margin;
        }
      });
    }
  };

  setInterval(() => {
    animate({
      duration: 2000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        autoplay();
      },
    });
  }, 20);
};

export default slider;
