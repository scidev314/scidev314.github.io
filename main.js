var button = document.getElementById("test1");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("my-div").style.backgroundColor = "green";
}
