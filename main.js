var button = document.getElementById("test1");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("ohio").style.color = "green";
  window.alert("why?");
  window.alert("I liked that blue text");
}
