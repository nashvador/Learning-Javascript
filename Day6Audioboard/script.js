var audioElement = new Audio("clap.mp3");
var booSound = new Audio("boo.mp3");
var gaspSound = new Audio("gasp.mp3");
var tadaSound = new Audio("tada.mp3");
var victorysound = new Audio("victory.mp3");
var wrongsound = new Audio("wrong.mp3");

let cat = [
  audioElement,
  booSound,
  gaspSound,
  tadaSound,
  victorysound,
  wrongsound,
];

let rat = function () {
  for (i = 0; i < cat.length; i++) {
    cat[i].pause();
    cat[i].currentTime = 0;
  }
};

// document.querySelector(".applause").addEventListener("click", function () {
//   rat();
//   audioElement.play();
// });

// document.querySelector(".boo").addEventListener("click", function () {
//   rat();
//   booSound.play();
// });

// document.querySelector(".gasp").addEventListener("click", function () {
//   rat();
//   gaspSound.play();
// });

// document.querySelector(".tada").addEventListener("click", function () {
//   rat();
//   tadaSound.play();
// });

// document.querySelector(".victory").addEventListener("click", function () {
//   rat();
//   victorysound.play();
// });

// document.querySelector(".wrong").addEventListener("click", function () {
//   rat();
//   wrongsound.play();
// });

// optimize

map = {
  applause: audioElement,
  boo: booSound,
  gasp: gaspSound,
  tada: tadaSound,
  victory: victorysound,
  wrong: wrongsound,
};

for (const [key, value] of Object.entries(map)) {
  document.querySelector(`.${key}`).addEventListener("click", function () {
    rat();
    value.play();
  });
}
