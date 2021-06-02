let TEXT_BOX = document.getElementById("texto");
let BUTTON = document.getElementById("boton");

BUTTON.addEventListener("click", function () {
  localStorage.name = TEX_TBOX.value;
  TEXT_BOX.value = "";
});
document.write(localStorage.name);
