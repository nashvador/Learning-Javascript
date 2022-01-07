function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".time").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var displayDate = new Date();
var day = displayDate.getUTCDay();
var month = displayDate.getMonth();
var date = displayDate.getDate();

document.querySelector(
  ".date"
).textContent = `${days[day]}, ${months[month]} ${date}`;

// Clock functionality

const hourHand = document.querySelector(".hand-hour");
const minuteHand = document.querySelector(".hand-minute");
const secondHand = document.querySelector(".hand-seconds");

function getTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getTime, 1000);

document.querySelector(".mode").addEventListener("click", function () {
  document.querySelector(".mode").classList.toggle("light-button");
  document.body.classList.toggle("background");
  document.querySelector(".hand-minute").classList.toggle("hand-color");
  document.querySelector(".hand-hour").classList.toggle("hand-color");
  document.querySelector(".clock").classList.toggle("clock-black");
});
