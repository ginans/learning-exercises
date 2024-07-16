//Crear un caja de input, Crear un botón enviar, Que al apretar enviar, se envíe el texto del input a la consola. y que se borre el texto puesto en input.
let form= document.getElementById("tarea_input");//llamo al html con su etiqueta y defino
let input= document.getElementById("entrada");

form.addEventListener("submit", function(event){
    event.preventDefault();//previene comportamiento por defecto
    console.log(input.value) //imprime lo que hay en entrada
    input.value = "" //limpia lo que habia en entrada despues del console.log
})

//cuando es un form no es necesario agregar la funcion de enter, ya viene por defecto