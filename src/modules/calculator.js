"use strict";

import { animate } from "./helpers";

const calculator = () => {
  const calculator = document.getElementById("calc");
  const calculatorInputs = calculator.querySelectorAll("#calc-input, select");
  const calcTypeSelect = document.getElementById("calc-type");
  const calcTypeMaterialSelect = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");
  let total;
  const calc = () => {
    let calcTypeSelectValue;
    let calcTypeMaterialSelectValue;
    let calcInputValue;

    let counter = 0;
    calcTypeSelectValue =
      +calcTypeSelect.options[calcTypeSelect.selectedIndex].value;
    console.log(calcTypeSelectValue);

    calcTypeMaterialSelectValue =
      +calcTypeMaterialSelect.options[calcTypeMaterialSelect.selectedIndex]
        .value;
    console.log(calcTypeMaterialSelectValue);

    calcInputValue = calcInput.value;
    console.log(calcInputValue);

    if (
      !calcTypeSelect.options[calcTypeSelect.selectedIndex].value &&
      !calcTypeSelect.options[calcTypeSelect.selectedIndex].value &&
      calcInput.value <= 0
    ) {
      calcTotal.value = "";
    } else {
      total = parseInt(
        calcTypeSelectValue * calcTypeMaterialSelectValue * calcInputValue
      );
    }

    counter = calcTotal.value;

    setInterval(() => {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          if (counter < total) {
            counter++;
            calcTotal.value = counter;
            return counter;
          } else if (counter > total) {
            counter--;
            calcTotal.value = counter;
            return counter;
          }
        },
      });
    }, 20);
  };

  calculatorInputs.forEach((el) => {
    el.addEventListener("change", () => {
      calc();
    });
  });
  console.log(total);
  return total;
};

export default calculator;
