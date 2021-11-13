"use strict";

let numbertwo = document.querySelector(".number.two");
let numberthree = document.querySelector(".number.three");
let numberfour = document.querySelector(".number.four");
let nextbutton = document.querySelector(".btn.next.active");

let i = 0;
let numbers = document.querySelectorAll(".number");
console.log(numbers);

document
  .querySelector(".btn.next.active")
  .addEventListener("click", function () {
    if (numbers[i].classList.contains("active")) {
      numbers[i + 1].classList.add("active");
      i++;
      if (i > 0) {
        document.querySelector(".btn.previous").classList.add("active");
      }
      if (i == 3) {
        nextbutton.classList.remove("active");
      }
    }
  });

document.querySelector(".btn.previous").addEventListener("click", function () {
  if (i < 4) {
    numbers[i].classList.remove("active");
    i--;
    nextbutton.classList.add("active");
  }
  if (i == 0) {
    document.querySelector(".btn.previous").classList.remove("active");
  }
});

// document
//   .querySelector(".btn.next.active")
//   .addEventListener("click", function () {
//     // document.querySelector(".btn.previous").classList.add("active");
//     // numbertwo.classList.add("active");
//     // numberthree.classList.add("active");
//     // numberfour.classList.add("active");
//     // nextbutton.classList.remove("active");
//     for (let i = 0; i < 4; i++) {
//       if
//     }
//   });

// document.querySelector(".btn.previous").addEventListener("click", function () {
//   document.querySelector(".btn.previous").classList.remove("active");
//   // numbertwo.classList.remove("active");
//   // numberthree.classList.remove("active");
//   // numberfour.classList.remove("active");
//   // nextbutton.classList.add("active");
// });
