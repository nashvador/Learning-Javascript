var eventKeys = document.getElementsByClassName("eventkey");

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < eventKeys.length; i++)
    eventKeys[i].classList.remove("this");

  document.querySelector(".remove").classList.add("this");
  //tested in IE/Chrome/Firefox
  document.getElementById("key").innerHTML = e.key;
  document.getElementById("keyCode").innerHTML = e.keyCode;
  document.getElementById("eventCode").innerHTML = e.code;
});
