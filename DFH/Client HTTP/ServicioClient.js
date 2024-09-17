class ServicioClient extends HttpBaseClient { 
    constructor(baseAddress) {
        super(baseAddress);
    }

    async insertar(data) {
        // Enviar solicitud POST con el cuerpo JSON
        return await this.sendRequest('POST', '/servicio/SoftHispan/apirest/insert', data);
    }

    async buscar(data) {
        // Enviar solicitud POST con el cuerpo JSON
        return await this.sendRequest('POST', '/servicio/SoftHispan/apirest/search', data);
    }

    async borrar(data) {
        // Enviar solicitud DELETE con el cuerpo JSON
        return await this.sendRequest('DELETE', '/servicio/SoftHispan/apirest/delete', data);
    }

    async crear(data) {
        // Enviar solicitud PUT con el cuerpo JSON
        return await this.sendRequest('PUT', '/servicio/SoftHispan/apirest/create', data);
    }

    static ServiceCRUD(sentence, data) {
        (async () => {
            const client = new ServicioClient('https://api.devcicm.com');

            try {
                if (sentence === 'i') {
                    // Insertar
                    const insertarResult = await client.insertar(data);
                    console.log('Insertar:', insertarResult);
                } else if (sentence === 's') {
                    // Buscar
                    const buscarResult = await client.buscar(data);
                    console.log('Buscar:', buscarResult);
                } else if (sentence === 'd') {
                    // Borrar
                    const borrarResult = await client.borrar(data);
                    console.log('Borrar:', borrarResult);
                } else if (sentence === 'c') {
                    // Crear
                    const crearResult = await client.crear(data);
                    console.log('Crear:', crearResult);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        })();
    }
}
