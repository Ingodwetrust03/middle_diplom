"use strict";

//import { total } from "./calculator";
const sendForm = () => {
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";

  const forms = document.querySelectorAll("form");

  const validate = (fio, phone) => {
    let success = true;
    if (
      fio.value.length < 2 ||
      fio.value === "" ||
      /[^а-яa-z]/gi.test(fio.value)
    ) {
      fio.value = "";
      fio.setAttribute(
        "placeholder",
        "Минимум 2 символа, Используйте кириллицу и пробелы"
      );
      fio.classList.add("error");
      return (success = false);
    } else if (
      phone.value.length >= 16 ||
      /[^0-9+]/gi.test(phone.value) ||
      phone.value === ""
    ) {
      phone.value = "";
      phone.setAttribute("placeholder", "Используйте цифры и +");
      phone.classList.add("error");
      return (success = false);
    } else {
      fio.setAttribute("placeholder", "ваше имя");
      fio.classList.remove("error");
      phone.setAttribute("placeholder", "ваш телефон");
      phone.classList.remove("error");
      return (success = true);
    }
  };

  const sendData = (form) => {
    const fio = form.querySelector("input[name=fio]");
    const phone = form.querySelector("input[name=phone]");
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        fio: fio.value,
        phone: phone.value,
        //calc: total,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        fio.value = "";
        phone.value = "";
        statusBlock.textContent = successText;
        form.append(statusBlock);
      });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fio = form.querySelector("input[name=fio]");
      const phone = form.querySelector("input[name=phone]");

      if (validate(fio, phone)) {
        sendData(form);
      }
    });
  });
};

export default sendForm;
