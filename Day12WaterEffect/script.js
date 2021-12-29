let drop = document.getElementsByClassName("drop");

for (let i = 1; i < 9; i++) {
  let water = document.querySelector(`.water-${i}`);
  let pct = document.getElementById("percentage");
  let text = document.getElementById("litres");
  water.addEventListener("click", function () {
    pct.style.height = `${(i / 8) * 330}px`;
    pct.textContent = `${i * 12.5}%`;
    text.textContent = `${2 - i * 0.25}L left`;
    // if (i == 1) {
    //   pct.style.height = "41.25px";
    //   pct.textContent = "12.5%";
    //   text.textContent = "1.75L Left";
    // }
    // if (i == 2) {
    //   pct.style.height = "82.5px";
    //   pct.textContent = "25.0%";
    //   text.textContent = "1.5L Left";
    // }
    // if (i == 3) {
    //   pct.style.height = "123.75px";
    //   pct.textContent = "37.5%";
    //   text.textContent = "1.25L Left";
    // }
    // if (i == 4) {
    //   pct.style.height = "165px";
    //   pct.textContent = "50%";
    //   text.textContent = "1L Left";
    // }
    // if (i == 5) {
    //   pct.style.height = "206.25px";
    //   pct.textContent = "62.5%";
    //   text.textContent = "0.75L Left";
    // }
    // if (i == 6) {
    //   pct.style.height = "247.5px";
    //   pct.textContent = "75%";
    //   text.textContent = "0.5L Left";
    // }
    // if (i == 7) {
    //   pct.style.height = "288.75px";
    //   pct.textContent = "87.5%";
    //   text.textContent = "0.25L Left";
    // }
    // if (i == 8) {
    //   pct.style.height = "330px";
    //   pct.textContent = "100%";
    //   text.textContent = "";
    // }

    for (let k = 1; k <= i; k++) {
      document.querySelector(`.water-${k}`).classList.add("active");
    }
    if (
      document.querySelector(`.water-${i + 1}`).classList.contains("active")
    ) {
      for (let j = i + 1; j < 9; j++) {
        document.querySelector(`.water-${j}`).classList.remove("active");
      }
    }
  });
}
