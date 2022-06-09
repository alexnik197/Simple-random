"use sctrict";

const number = document.querySelector(".number");
const randomBtn = document.querySelector("#random");
const maxNumBtn = document.querySelector("#maxValue");
const inputMaxNum = document.querySelector("#maxNumber");

let maxValue;
maxNumBtn.addEventListener("click", function () {
  maxValue = inputMaxNum.value;
  setTimeout(function () {
    inputMaxNum.value = "";
  }, 3000);
});
randomBtn.addEventListener("click", function () {
  if (maxValue === undefined) {
    alert("Type max value!");
  } else {
    number.textContent = Math.round(Math.random() * maxValue);
  }
});
