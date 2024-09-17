class DOMControls {
    // Método para crear un grupo de formulario
    static createFormGroup(control, controlType, properties) {
        const formGroup = document.createElement('div');
        formGroup.className = 'grupo-formulario';

        // Crear el label usando el id del componente
        const label = document.createElement('label');
        label.setAttribute('for', control.id);

        // Limpiar el id para mostrarlo como texto legible
        const labelText = control.id.replace(/[-_]/g, ' ');
        label.textContent = labelText.charAt(0).toUpperCase() + labelText.slice(1);

        formGroup.appendChild(label);

        let element;
        if (controlType === 'select') {
            element = this.createSelectControl(control);
        } else if (controlType === 'textarea') {
            element = this.createTextAreaControl(control);
        } else if (controlType === 'checkbox' || controlType === 'radio') {
            control.options.forEach(option => {
                const { input, label: optionLabel } = this.createInputWithLabel(option, controlType);
                formGroup.appendChild(optionLabel);
            });
            return formGroup;
        } else if (controlType === 'button') {
            element = this.createButtonControl(control);
        } else {
            element = this.createInputControl(control, controlType);
        }

        // Asignar propiedades a los elementos
        properties.forEach(prop => {
            if (control[prop]) {
                element.setAttribute(prop, control[prop]);
            }
        });

        // Aplicar dimensiones personalizadas si están definidas en el JSON
        if (control.customWidth) {
            element.style.width = control.customWidth;
        }
        if (control.customHeight) {
            element.style.height = control.customHeight;
        }

        formGroup.appendChild(element);
        return formGroup;
    }

    // Método para crear un input básico
    static createInputControl(control, type) {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.id = control.id; // Asignar el ID aquí
        return input;
    }

    // Método para crear un textarea
    static createTextAreaControl(control) {
        const textarea = document.createElement('textarea');
        textarea.rows = control.rows;
        textarea.id = control.id; // Asignar el ID aquí
        return textarea;
    }

    // Método para crear un select
    static createSelectControl(control) {
        const select = document.createElement('select');
        select.id = control.id; // Asignar el ID aquí
        control.options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            select.appendChild(option);
        });
        return select;
    }

    // Método para crear un input con etiqueta (checkbox/radio)
    static createInputWithLabel(control, type) {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', control.value);
        input.id = control.id; // Asignar el ID aquí
        input.name = control.name;
        if (control.required) input.required = true;

        const label = document.createElement('label');
        label.textContent = control.label;
        label.prepend(input);

        return { input, label };
    }

    // Método para crear un botón
    static createButtonControl(control) {
        const button = document.createElement('input');
        button.setAttribute('type', control.type);
        button.id = control.id; // Asignar el ID aquí
        button.addEventListener('click', function () {
            alert('Formulario enviado');
            DOMControls.getValuesComponentsDOM('containerRU');
        });
        return button;
    }

    // Método para crear la barra de progreso
    static createProgressBar() {
        const progress = document.createElement('div');
        progress.className = 'progreso';
        const progressBar = document.createElement('div');
        progressBar.className = 'barra-progreso';
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';
        progress.appendChild(progressBar);
        return { progress, progressBar };
    }

    // Método para generar el formulario dinámico
    static generateForm(jsonData, formName, containerId, properties) {
        const form = jsonData[0].forms[formName];

        if (!form) {
            console.error(`Formulario ${formName} no encontrado.`);
            return;
        }

        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Contenedor con ID ${containerId} no encontrado.`);
            return;
        }

        container.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos elementos

        // Agregar el título si existe
        if (form.title) {
            const title = document.createElement('h2');
            title.textContent = form.title;
            container.appendChild(title);
        }

        // Verificar si se debe agregar la barra de progreso
        if (form.progressBar) {
            const { progress, progressBar } = this.createProgressBar();
            container.appendChild(progress);

            let totalFields = 0;
            let completedFields = 0;

            for (let controlType in form.controls) {
                form.controls[controlType].forEach(control => {
                    totalFields++;
                    const formGroup = this.createFormGroup(control, controlType, properties);

                    // Actualizar la barra de progreso
                    const element = formGroup.querySelector(controlType !== 'checkbox' && controlType !== 'radio' ? 'input, select, textarea' : 'input');
                    element.addEventListener('input', function () {
                        if (element.value) {
                            if (!element.dataset.completed) {
                                completedFields++;
                                element.dataset.completed = true;
                            }
                        } else {
                            if (element.dataset.completed) {
                                completedFields--;
                                element.dataset.completed = false;
                            }
                        }
                        const percentComplete = Math.round((completedFields / totalFields) * 100);
                        progressBar.style.width = percentComplete + '%';
                        progressBar.textContent = percentComplete + '%';
                    });

                    container.appendChild(formGroup);
                });
            }
        } else {
            for (let controlType in form.controls) {
                form.controls[controlType].forEach(control => {
                    const formGroup = this.createFormGroup(control, controlType, properties);
                    container.appendChild(formGroup);
                });
            }
        }
    }

   // Método para obtener valores de los componentes del DOM
static getValuesComponentsDOM(containerIds) {
    const formData = {};

    containerIds.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Contenedor con ID ${containerId} no encontrado.`);
            return;
        }

        const containerName = container.querySelector('h2').textContent; // Obtiene el título del formulario
        formData[containerName] = {};

        const inputs = container.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            const name = input.name || input.id;
            const type = input.type;

            if (type === 'checkbox') {
                formData[containerName][name] = input.checked;
            } else if (type === 'radio') {
                if (input.checked) {
                    formData[containerName][name] = input.value;
                }
            } else {
                formData[containerName][name] = input.value;
            }
        });
    });

    // Convertir el objeto formData a una cadena JSON
    const jsonResult =  JSON.stringify({ FORM: formData }, null, 2);


    // Mostrar en consola y alerta para depuración
    console.log(jsonResult);


    // Retornar el jsonResult
    return jsonResult;
}

    // Método para establecer valores de los componentes en el DOM
    // Método para establecer los valores de los componentes del DOM desde un JSON
    static setValuesComponentsDOM(formData) {
        if (!formData || !formData.FORM) {
            console.error("No hay datos válidos en el objeto formData.");
            return;
        }
    
        Object.keys(formData.FORM).forEach(containerName => {
            // Buscar el contenedor correspondiente por el título
            const containerHeaders = document.querySelectorAll('.form-container h2');
            containerHeaders.forEach(header => {
                if (header.textContent.trim() === containerName.trim()) {
                    const containerDiv = header.parentElement;
                    const inputs = containerDiv.querySelectorAll('input, select, textarea');
    
                    inputs.forEach(input => {
                        const name = input.name || input.id;
                        const value = formData.FORM[containerName][name];
    
                        if (value !== undefined) {
                            if (input.type === 'checkbox' || input.type === 'radio') {
                                input.checked = !!value;
                            } else {
                                input.value = value;
                            }
                        }
                    });
                }
            });
        });
    }
    

}