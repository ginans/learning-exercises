const entrada= document.getElementById("input");
const boton= document.getElementById("boton");
const lista_tareas= document.getElementById("lista-tareas")

function mi_mensaje(){
    let mensaje= entrada.value;
    console.log(mensaje);
    entrada.value="";
}

boton.addEventListener("click", mi_mensaje);

entrada.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        console.log(entrada.value); //o mi_mensaje()
        entrada.value="";
    }
})

