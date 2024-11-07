var button = document.getElementById("test1");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("ohio").style.color = "green";
  talk();
}

function talk() {
  window.alert("why?");
  document.getElementById("ohio").style.color = "green";
  window.alert("I liked that blue text");
  document.getElementById("ohio").style.color = "green";
  window.alert("frick you");
}
