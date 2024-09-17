class HttpBaseClient {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
    }

    async sendRequest(method, route, content = null) {
        const token = "123e4567-e89b-12d3-a456-426614174000"; // Reemplaza con tu token real

        const url = `${this.baseAddress}${route}`;
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Incluir el token en el encabezado Authorization
            },
            credentials: 'include'
        };

        if (content && (method === 'POST' || method === 'PUT')) {
            options.body = content;
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    // Métodos abstractos que deben ser implementados en la clase derivada
    async insertar(data) {
        throw new Error('Method not implemented');
    }

    async buscar(queryParams) {
        throw new Error('Method not implemented');
    }

    async borrar(queryParams) {
        throw new Error('Method not implemented');
    }

    async crear(data) {
        throw new Error('Method not implemented');
    }
}
