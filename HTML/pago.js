const form= document.getElementById("form")
const nombre= document.getElementById("nombre")

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(nombre.value)
    nombre.value=""
})