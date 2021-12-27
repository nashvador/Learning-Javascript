function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

let obj = document.getElementById("twitter");
let obj1 = document.getElementById("youtube");
let obj2 = document.getElementById("facebook");

animateValue(obj, 0, 12000, 10000);
animateValue(obj1, 0, 5000, 10000);
animateValue(obj2, 0, 7500, 10000);
