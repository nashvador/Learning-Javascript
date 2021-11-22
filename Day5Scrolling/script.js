var someElement = document.querySelectorAll(".content-box");

let i = 0;

window.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    console.log("scroll up");
    if (i > 0) {
      if (someElement[i].getBoundingClientRect().top >= 0) {
        console.log(i);
        if (!someElement[i + 2].classList.contains("active")) {
          someElement[i + 2].classList.add("active");
          i--;
        }
        // if (!someElement[i + 3].classList.contains("active")) {
        //   console.log(i);

        // someElement[i + 3].classList.add("active");
        // i--;
      }
    }
  }
  // if (i <= 8 && i >= 3) {
  //   if (someElement[i - 3].getBoundingClientRect().top <= 0) {
  //     if (!someElement[i].classList.contains("active")) {
  //       someElement[i].classList.add("active");
  //       i--;
  //       console.log(i);
  //     }
  //   }
  // }

  if (e.deltaY > 0) {
    console.log("scrolling down");
    if (i < 6) {
      if (someElement[i].getBoundingClientRect().top <= 0) {
        if (someElement[i + 3].classList.contains("active")) {
          someElement[i + 3].classList.remove("active");
          i++;
          console.log(i);
        }
      }
    }
  }
});

// scrollableElement.addEventListener("wheel", checkScrollDirection);
// function checkScrollDirection(event) {
//   if (checkScrollDirectionisUp(event)) {
//     window.onscroll = function () {
//       if (!someElement[i].classList.contains("active")) {
//         if (someElement[i - 3].getBoundingClientRect().top <= 0) {
//           someElement[i].classList.add("active");
//           i--;
//         }
//       }
//     };
//   } else {
//     window.onscroll = function () {
//       if (someElement[i].classList.contains("active")) {
//         if (someElement[i - 3].getBoundingClientRect().top <= 0) {
//           someElement[i].classList.remove("active");
//           i++;
//         }
//       }
//     };
//   }
// }

// function checkScrollDirectionisUp(event) {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0;
//   }
//   return event.deltaY < 0;
// }
