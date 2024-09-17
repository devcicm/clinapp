function crearTablaDesdeJSON(datosJSON, mostrarAccion) {
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    if (!Object.keys(datosJSON).length) {
        return tabla;
    }

    const ordenColumnas = Object.keys(datosJSON[Object.keys(datosJSON)[0]]);
    const encabezado = document.createElement("tr");

    ordenColumnas.forEach(columna => {
        const th = document.createElement("th");
        th.innerText = columna;
        encabezado.appendChild(th);
    });

    const thAccion = document.createElement("th");
    thAccion.innerText = "Acción";
    if (!mostrarAccion) {
        thAccion.classList.add("hidden");
    }
    encabezado.appendChild(thAccion);

    thead.appendChild(encabezado);

    Object.keys(datosJSON).forEach(key => {
        const fila = document.createElement("tr");
        fila.setAttribute("data-id", key);
        ordenColumnas.forEach(columna => {
            const td = document.createElement("td");
            const valorFormateado = formatearValor(datosJSON[key][columna]);
            td.innerText = valorFormateado;
            td.setAttribute("data-columna", columna);
            fila.appendChild(td);
        });

        const tdAccion = document.createElement("td");
        tdAccion.classList.add("hidden");
        fila.appendChild(tdAccion);

        tbody.appendChild(fila);
    });

    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    return tabla;
}

function cargarTablaConPaginacion(datosJSON, registrosPorPagina, pagina, mostrarAccion) {
    const keys = Object.keys(datosJSON);
    const startIndex = (pagina - 1) * registrosPorPagina;
    const endIndex = startIndex + registrosPorPagina;
    const datosPagina = keys.slice(startIndex, endIndex).reduce((acc, key) => {
        acc[key] = datosJSON[key];
        return acc;
    }, {});

    const tabla = crearTablaDesdeJSON(datosPagina, mostrarAccion);
    document.getElementById("contenedorTabla").innerHTML = "";
    document.getElementById("contenedorTabla").appendChild(tabla);

    asignarEventosEdicion();
}

function mostrarAccionColumna(fila) {
    ocultarAccionColumna();  // Oculta todas las acciones antes de mostrar las nuevas
    const tdAccion = fila.querySelector("td:last-child");
    tdAccion.classList.remove("hidden");
}

function ocultarAccionColumna() {
    document.querySelectorAll("#contenedorTabla th:last-child, #contenedorTabla td:last-child").forEach(el => {
        el.classList.add("hidden");
    });
}
