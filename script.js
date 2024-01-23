function agregarDato() {
  const nombre = document.getElementById("nombre").value;
  const objeto = document.getElementById("objeto").value;
  const categoria = document.getElementById("categoria").value;

  if (nombre && objeto && categoria) {
    const nuevoDato = { nombre, objeto, categoria };
    agregarElementoLista(nuevoDato);
    limpiarFormulario();
  } else {
    alert("Completa todos los campos");
  }
}

function agregarElementoLista(dato) {
  const listaDatos = document.getElementById("lista-datos");
  const li = document.createElement("li");
  li.innerHTML = `<span>${dato.nombre} - ${dato.objeto} - ${dato.categoria}</span>
                   <button class="delete-btn" onclick="eliminarDato(this)">Eliminar</button>`;
  listaDatos.appendChild(li);
}

function eliminarDato(elemento) {
  const li = elemento.parentNode;
  li.parentNode.removeChild(li);
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("objeto").value = "";
  document.getElementById("categoria").value = "mensajeria";
}
function refrescarDatos() {
  location.reload(); // Recargar la página para simular la actualización de datos
}
