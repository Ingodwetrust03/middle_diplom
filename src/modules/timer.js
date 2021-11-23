"use strict";

const timer = (limit) => {
  const daysInput = document.querySelector(".count_1 span");
  const hoursInput = document.querySelector(".count_2 span");
  const minutesInput = document.querySelector(".count_3 span");
  const secondsInput = document.querySelector(".count_4 span");

  const getTime = () => {
    const newDateMiliSeconds = new Date().getTime();
    const limitDateMiliSeconds = new Date(limit).getTime();
    const miliSecondsRemained = limitDateMiliSeconds - newDateMiliSeconds;

    const daysRemained = Math.floor(
      (miliSecondsRemained / 1000 / 60 / 60) % 24
    );
    const hoursRemained = Math.floor(
      (miliSecondsRemained / 1000 / 60 / 60) % 60
    );
    const minutesRemained = Math.floor((miliSecondsRemained / 1000 / 60) % 60);
    const secondsRemained = Math.floor((miliSecondsRemained / 1000) % 60);

    return {
      days: daysRemained,
      hours: hoursRemained,
      minutes: minutesRemained,
      seconds: secondsRemained,
      remainedSeconds: miliSecondsRemained,
    };
  };

  const addZero = (num) => {
    if (num <= 9) {
      num = "0" + num;
    }
    return num;
  };

  const animateTimer = () => {
    let newTime = getTime();

    let countedDays = newTime.days;
    let countedHours = newTime.hours;
    let countedMinutes = newTime.minutes;
    let countedSeconds = newTime.seconds;

    daysInput.textContent = addZero(countedDays);
    hoursInput.textContent = addZero(countedHours);
    minutesInput.textContent = addZero(countedMinutes);
    secondsInput.textContent = addZero(countedSeconds);

    setInterval(animateTimer, 1000);

    if (newTime.remainedSeconds <= 0) {
      clearInterval(animateTimer);
      daysInput.textContent = "00";
      hoursInput.textContent = "00";
      minutesInput.textContent = "00";
      secondsInput.textContent = "00";
    }
  };

  animateTimer();
};

export default timer;
