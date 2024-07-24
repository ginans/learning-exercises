let input = document.getElementById("entrada");
let botoncito = document.getElementById("boton");

botoncito.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log(input.value);
  input.value = "";
});

input.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    evento.preventDefault();
    console.log(input.value);
    input.value = "";
  }
});
