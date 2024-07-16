const ingreso = document.getElementById("ingreso"); // Obtiene el elemento input del HTML
const boton = document.getElementById(“button”); // Obtiene el botón del HTML
const lista = document.getElementById(“lista”); // Obtiene la lista (ul) del HTML
function obtenerTareas() {
  // Obtiene las tareas guardadas en Local Storage y las convierte a un array
  const tareas = localStorage.getItem(“tareas”);
  return tareas ? JSON.parse(tareas) : []; // Si no hay tareas, retorna un array vacío
}
function guardarTareas(tareas) {
  // Guarda las tareas en Local Storage como una cadena JSON
  localStorage.setItem(“tareas”, JSON.stringify(tareas));
}
function añadirTarea(tareaTexto) {
  const tarea = document.createElement(“li”); // Crea el elemento li en el HTML
  tarea.textContent = tareaTexto; // Asigna el texto de la tarea al li
  const botonEliminar = document.createElement(“button”); // Crea un botón para eliminar la tarea
  botonEliminar.textContent = “Eliminar”; // Asigna el texto “Eliminar” al botón
  botonEliminar.addEventListener(“click”, function () {
    lista.removeChild(tarea); // Elimina la tarea de la lista (DOM)
    eliminarTarea(tareaTexto); // Elimina la tarea del Local Storage
  });
  tarea.appendChild(botonEliminar); // Añade el botón de eliminar a la tarea
  lista.appendChild(tarea); // Añade la nueva tarea a la lista
}
function añadirTareaYGuardar() {
  const tareaTexto = ingreso.value; // Obtiene el valor del input del HTML
  if (tareaTexto === “”) return; // Si el input está vacío, no hace nada
  añadirTarea(tareaTexto); // Añade la tarea a la lista (DOM)
  const tareas = obtenerTareas(); // Obtiene las tareas guardadas
  tareas.push(tareaTexto); // Añade la nueva tarea al array de tareas
  guardarTareas(tareas); // Guarda el array de tareas actualizado en Local Storage
  ingreso.value = “”; // Limpia el campo del input
}
function eliminarTarea(tareaTexto) {
  let tareas = obtenerTareas(); // Obtiene las tareas guardadas
  tareas = tareas.filter(t => t !== tareaTexto); // Filtra la tarea que se desea eliminar
  guardarTareas(tareas); // Guarda el array de tareas actualizado en Local Storage
}
function clickEnviar() {
  boton.addEventListener(“click”, function () {
    añadirTareaYGuardar(); // Añade y guarda la tarea al hacer clic en el botón
  });
}
function cargarTareas() {
  const tareas = obtenerTareas(); // Obtiene las tareas guardadas
  tareas.forEach(tareaTexto => añadirTarea(tareaTexto)); // Añade cada tarea guardada a la lista (DOM)
}
// Inicializar
clickEnviar(); // Configura el event listener para el botón
cargarTareas(); // Carga las tareas guardadas cuando se carga la página







