const listaTareas = [];

const inputNombre = document.getElementById("inputNombre");

function crearTarea() {
  // Creamos un objeto de tarea
  const tarea = {
    // Le asignamos su propiedad de texto
    // según lo que viene en el input
    texto: inputNombre.value,
    // Creamos la tarea como sin completar
    completada: false
  }
  // Movemos el objeto de tarea a la lista de tareas
  listaTareas.push(tarea);


  const label = document.createElement("label");
  label.className = "elemento-tarea"

  const input = document.createElement("input");
  const p = document.createElement("p");

  label.appendChild(input);
  label.appendChild(p);

  document.getElementById("lista").appendChild(label);

  // Vaciamos el input
  inputNombre.value = "";
  // Enfocamos el input
  inputNombre.focus();

  console.log(listaTareas);
}