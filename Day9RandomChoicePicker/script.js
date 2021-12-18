var nameField = document.getElementById("nameField");
var catList = document.getElementById("categories-list");
var categories = [];
var confused = document.getElementsByClassName("props");
nameField.onkeyup = updateNameDisplay;

function updateNameDisplay() {
  catList.innerHTML = this.value || "";
  // if (event.keyCode === 188) {
  // var category = this.value.substring(0, this.value.length - 1);
  // categories.push(category);
  categories = this.value.split(",");
  // this.value = "";
  reloadCategories();

  // if (nameField.value.split(",").length - 1 >= 1) {
  //   var category = this.value.substring(0, this.value.length);
  //   categories.push(category);
  //   reloadCategories();
  // }

  if (event.keyCode === 13) {
    for (let k = 0; k < 20; k++) {
      let random = Math.floor(Math.random() * categories.length);
      setTimeout(() => {
        document.getElementById(`${random}`).classList.add("active");
      }, 50);

      if (k === 19) {
        break;
      }
      setTimeout(() => {
        document.getElementById(`${random}`).classList.remove("active");
      }, 150);
    }
  }
}
// }

function reloadCategories() {
  catList.innerHTML = "";
  for (var i = 0; i < categories.length; i++) {
    catList.innerHTML += `<li class="props" id="${i}"> ${categories[i]}</li>`;
  }
}
