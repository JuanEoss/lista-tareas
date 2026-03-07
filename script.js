let listaTareas = [];

const localTaskList = localStorage.getItem("taskList");

if (localTaskList && localTaskList !== "") {
  listaTareas = JSON.parse(localTaskList);
  actualizarListado();
}

const inputNombre = document.getElementById("inputNombre");

function crearTarea() {
  if (inputNombre.value == "") {
    alert("¡Debes escribir un nombre!");
    return;
  }

  // Creamos un objeto de tarea
  const tarea = {
    // Le asignamos su propiedad de texto
    // según lo que viene en el input
    texto: inputNombre.value,
    // Creamos la tarea como sin completar
    completada: false,
  };
  // Movemos el objeto de tarea a la lista de tareas
  listaTareas.push(tarea);

  // Vaciamos el input
  inputNombre.value = "";
  // Enfocamos el input
  inputNombre.focus();

  actualizarListado();
}

function marcarCasilla(evento, index) {
  listaTareas[index].completada = evento.target.checked;
  actualizarListado();
}

function actualizarListado() {
  document.getElementById("lista").innerHTML = "";

  for (let index = 0; index < listaTareas.length; index++) {
    const tarea = listaTareas[index];

    const label = document.createElement("label");
    label.className = "elemento-tarea";
    if (tarea.completada) {
      label.classList.add("completado");
    } else {
      label.classList.remove("completado");
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = tarea.completada;

    input.onchange = function (evento) {
      marcarCasilla(evento, index);
    };

    const p = document.createElement("p");
    p.className = "tarea-titulo";
    p.innerHTML = tarea.texto;

    const button = document.createElement("button");
    button.className = "boton-eliminar";
    button.innerHTML = "X";
    button.onclick = function () {
      listaTareas.splice(index, 1);
      actualizarListado();
    };

    label.appendChild(input);
    label.appendChild(p);
    label.appendChild(button);

    // Quedaría algo asi:
    // <label class="elemento-tarea completado">
    //    <input type="checkbox" checked="true"/"false" />
    //    <p/>
    //    <button/>
    // </label>

    document.getElementById("lista").appendChild(label);
  }
  localStorage.setItem("taskList", JSON.stringify(listaTareas));
}
