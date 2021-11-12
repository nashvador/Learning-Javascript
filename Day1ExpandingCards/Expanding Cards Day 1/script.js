"use strict";

let dog = function () {
  document.querySelector(".dog").classList.remove("active");
  document.querySelector(".dog").classList.add("hidden");
};

let beach = function () {
  document.querySelector(".beach").classList.remove("active");
  document.querySelector(".beach").classList.add("hidden");
};

let city = function () {
  document.querySelector(".city").classList.remove("active");
  document.querySelector(".city").classList.add("hidden");
};

let purplesky = function () {
  document.querySelector(".purplesky").classList.remove("active");
  document.querySelector(".purplesky").classList.add("hidden");
};

let mountain = function () {
  document.querySelector(".mountain").classList.remove("active");
  document.querySelector(".mountain").classList.add("hidden");
};

document.querySelector(".dog").addEventListener("click", function () {
  //   document.querySelector(".city").classList.remove("hidden");
  document.querySelector(".dog").classList.add("active");
  city();
  beach();
  purplesky();
  mountain();
});

document.querySelector(".city").addEventListener("click", function () {
  //   document.querySelector(".city").classList.remove("hidden");
  document.querySelector(".city").classList.add("active");
  beach();
  dog();
  purplesky();
  mountain();
});

document.querySelector(".beach").addEventListener("click", function () {
  //   document.querySelector(".city").classList.remove("hidden");
  document.querySelector(".beach").classList.add("active");
  city();
  dog();
  purplesky();
  mountain();
});

document.querySelector(".purplesky").addEventListener("click", function () {
  //   document.querySelector(".city").classList.remove("hidden");
  document.querySelector(".purplesky").classList.add("active");
  city();
  dog();
  beach();
  mountain();
});

document.querySelector(".mountain").addEventListener("click", function () {
  //   document.querySelector(".city").classList.remove("hidden");
  document.querySelector(".mountain").classList.add("active");
  city();
  dog();
  beach();
  purplesky();
});
