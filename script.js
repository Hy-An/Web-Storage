let TEXTBOX = document.getElementById("texto");
let BUTTON = document.getElementById("boton");

BUTTON.addEventListener("click", function () {
  localStorage.name = TEXTBOX.value;
  TEXTBOX.value = "";
});
document.write(localStorage.name);
