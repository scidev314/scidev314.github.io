var button = document.getElementById("test1");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("ohio").style.color = "green";
  talk();
}

function talk() {
  window.alert("why?");
  window.alert("I liked that blue text");
  window.alert("frick you");
}
