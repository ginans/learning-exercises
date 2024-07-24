// Obtén los elementos del DOM (Document Object Model)
const entrada = document.getElementById("input");
const boton = document.getElementById("boton");
const listaTareas = document.getElementById("lista-tareas");

// Función para agregar una nueva tarea
function agregarTarea() {
    let mensaje = entrada.value; // Obtener el valor del input

    // .trim() elimina los espacios en blanco al principio y al final de la cadena
    if (mensaje.trim() !== "") { 
        let nuevaTarea = document.createElement("li"); // Crear un nuevo elemento li

        // Crear un botón de eliminación
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete-btn";

        // Agregar un evento al botón de eliminación para eliminar la tarea
        deleteBtn.addEventListener("click", function() {
            listaTareas.removeChild(nuevaTarea);
        });

        // Establecer el texto de la tarea y agregar el botón de eliminación
        nuevaTarea.textContent = mensaje;
        nuevaTarea.appendChild(deleteBtn);

        // Agregar la nueva tarea a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de entrada
        entrada.value = "";
    }
}

// Agregar eventos al botón y al input
boton.addEventListener("click", agregarTarea);

// Agregar la tarea al presionar la tecla "Enter"
entrada.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});
