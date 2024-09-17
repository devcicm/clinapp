class StatusModal {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.createModal();
    }

    createModal() {
      const modalHTML = `
        <div class="modal fade" id="statusModal" tabindex="-1" aria-labelledby="statusModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="statusModalLabel">Operación</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <img id="modalIcon" src="" alt="Icon" class="modal-icon">
                <p id="modalMessage"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="acceptButton">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      `;

      this.container.innerHTML = modalHTML;
      this.modalElement = new bootstrap.Modal(document.getElementById('statusModal'));
      this.iconElement = document.getElementById('modalIcon');
      this.messageElement = document.getElementById('modalMessage');

      // Configurar el botón de aceptar para cerrar el modal
      document.getElementById('acceptButton').addEventListener('click', () => {
        this.modalElement.hide();
      });
    }

    show(statusCode) {
      let iconSrc = '';
      let message = '';

      switch (statusCode) {
        case 200:
          iconSrc = 'path/to/success-icon.png'; // Cambia este path por el correcto
          message = 'El registro ha sido insertado exitosamente.';
          break;
        case 201:
          iconSrc = 'path/to/created-icon.png';
          message = 'El registro ha sido creado exitosamente.';
          break;
        case 400:
          iconSrc = 'path/to/error-icon.png';
          message = 'Ocurrió un error en la solicitud.';
          break;
        case 404:
          iconSrc = 'path/to/not-found-icon.png';
          message = 'No se encontró el recurso solicitado.';
          break;
        case 500:
          iconSrc = 'path/to/server-error-icon.png';
          message = 'Ocurrió un error en el servidor.';
          break;
        default:
          iconSrc = 'path/to/default-icon.png';
          message = 'Ocurrió una situación inesperada.';
      }

      this.iconElement.src = iconSrc;
      this.messageElement.textContent = message;

      this.modalElement.show();
    }
  }