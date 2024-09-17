function asignarEventosEdicion() {
    document.querySelectorAll("#contenedorTabla tbody tr").forEach(tr => {
        tr.addEventListener("dblclick", function() {
            if (filaEnEdicion === null) { // Solo permitir editar una fila a la vez
                mostrarAccionColumna(this);
                editarFila(this);
                filaEnEdicion = this; // Guardar la fila en edición
            }
        });
    });
}

function editarFila(fila) {
    fila.classList.add("editing");
    const columnas = fila.querySelectorAll("td[data-columna]");
    columnas.forEach(columna => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = columna.innerText;
        columna.innerHTML = "";
        columna.appendChild(input);
    });

    const tdAccion = fila.querySelector("td:last-child");
    tdAccion.innerHTML = "";

    // Botón de Actualizar
    const botonActualizar = document.createElement("button");
    botonActualizar.classList.add("btn-save");
    botonActualizar.innerText = "Actualizar";
    botonActualizar.addEventListener("click", function() {
        guardarEdicion(fila);
        ocultarAccionColumna();
        fila.classList.remove("editing");
        filaEnEdicion = null; // Permitir editar otra fila
    });

    // Botón de Eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn-danger");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        eliminarRegistro(fila.getAttribute("data-id"), registros);
        cargarTablaConPaginacion(registros, registrosPorPagina, paginaActual, false);
        filaEnEdicion = null; // Permitir editar otra fila
    });

    // Botón de Cancelar
    const botonCancelar = document.createElement("button");
    botonCancelar.classList.add("btn-cancel");
    botonCancelar.innerText = "Cancelar";
    botonCancelar.addEventListener("click", function() {
        cargarTablaConPaginacion(registros, registrosPorPagina, paginaActual, false);
        ocultarAccionColumna();
        fila.classList.remove("editing");
        filaEnEdicion = null; // Permitir editar otra fila
    });

    tdAccion.appendChild(botonActualizar);
    tdAccion.appendChild(botonEliminar);
    tdAccion.appendChild(botonCancelar);
}

function guardarEdicion(fila) {
    const idRegistro = fila.getAttribute("data-id");
    const columnas = fila.querySelectorAll("td[data-columna]");
    columnas.forEach(columna => {
        const input = columna.querySelector("input");
        const nuevoValor = input.value;
        columna.innerHTML = nuevoValor;
        registros[idRegistro][columna.getAttribute("data-columna")] = nuevoValor;
    });
    console.log("Registro actualizado:", registros[idRegistro]);
}

function eliminarRegistro(idRegistro, datosJSON) {
    delete datosJSON[idRegistro];
    console.log("Registro eliminado:", idRegistro);
}
