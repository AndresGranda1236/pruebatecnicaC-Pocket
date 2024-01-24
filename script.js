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
  const tr = document.createElement("tr");
  tr.innerHTML = `
                   <td>${dato.nombre}</td>
                   <td>${dato.objeto}</td>
                   <td>${dato.categoria}</td>
                   <td><button class="delete-btn" onclick="eliminarDato(this.parentElement)">Eliminar</button></td>`;
  listaDatos.appendChild(tr);
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
  location.reload();
}
