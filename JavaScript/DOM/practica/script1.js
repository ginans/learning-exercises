const entrada= document.getElementById("mi-input");
const boton= document.getElementById("el-boton");

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