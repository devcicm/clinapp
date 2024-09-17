function formatearValor(valor) {
    // Regex para detectar el formato datetime ISO (YYYY-MM-DDTHH:MM:SS)
    const regexDatetime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/;

    // Evitar formatear si el valor es un número entero
    if (Number.isInteger(parseFloat(valor)) && !regexDatetime.test(valor)) {
        return valor;
    }

    if (regexDatetime.test(valor)) {
        const fecha = new Date(valor);
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
        const año = fecha.getFullYear();

        // Convertir a formato de 12 horas
        let horas = fecha.getHours();
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        const ampm = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12;
        horas = horas ? horas : 12; // El "0" se convierte en "12"

        return `${dia}/${mes}/${año} ${horas}:${minutos} ${ampm}`;
    }

    return valor;
}
