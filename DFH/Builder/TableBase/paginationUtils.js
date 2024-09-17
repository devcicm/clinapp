function generarControlesPaginacion(totalRegistros, registrosPorPagina) {
    const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.setAttribute("data-page", i);
        pageLink.innerText = i;
        if (i === paginaActual) {
            pageLink.classList.add('active');
        }
        paginationContainer.appendChild(pageLink);
    }

    document.querySelectorAll('#pagination-container a').forEach(pageLink => {
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();
            paginaActual = parseInt(this.getAttribute('data-page'));
            cargarTablaConPaginacion(registros, registrosPorPagina, paginaActual, false);
            document.querySelectorAll('#pagination-container a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
}
