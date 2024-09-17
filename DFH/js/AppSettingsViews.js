class AppSettingsViews{

    static getConfigViewUrgencias()
    {
             // JSON para el Formulario Modular
             const jsonData = [
                {
                    "forms": {
                        "RegistrarUrgencia": {
                            "title": "Registrar Urgencia",
                            "Container": {
                                "id": "containerRU"
                            },
                            "progressBar": false,  // Esta propiedad determina si la barra de progreso se muestra
                            "controls": {
                                "input": [
                                    {
                                        "id": "Nombre",
                                        "name": "nombre",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Apellido",
                                        "name": "apellido",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Run",
                                        "name": "run",
                                        "value": "",
                                        "placeholder": "Ingrese su identificador",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Fecha_de_Ingreso",
                                        "name": "Fecha_de_Ingreso",
                                        "value": "",
                                        "placeholder": "Fecha de Ingreso",
                                        "type": "datetime-local" // Permite captura de fecha y hora
                                    }
                                ],
                                "textarea": [
                                    {
                                        "id": "Detalle_de_consulta",
                                        "name": "DetallesConsultaRU",
                                        "value": "",
                                        "placeholder": "Ingrese Detalle de consulta",
                                        "rows": 4,
                                        "customWidth": "380px",
                                        "customHeight": "80px"
                                    }
                                ],
                                "radio": [
                                    {
                                        "id": "Tipo_de_Urgencia",
                                        "name": "urgency",
                                        "required": true,
                                        "options": [
                                            {
                                                "id": "AtenciónInmediata",
                                                "name": "urgency",
                                                "value": "Atención Inmediata",
                                                "label": "Atención Inmediata"
                                            },
                                            {
                                                "id": "Importante",
                                                "name": "urgency",
                                                "value": "Importante",
                                                "label": "Importante"
                                            },
                                            {
                                                "id": "Urgente",
                                                "name": "urgency",
                                                "value": "Urgente",
                                                "label": "Urgente"
                                            },
                                            {
                                                "id": "NoUrgente",
                                                "name": "urgency",
                                                "value": "No Urgente",
                                                "label": "No Urgente"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "RegistrarAtenciónPrimaria": {
                            "title": "Registrar Atención Primaria",
                            "Container": {
                                "id": "containerRAP"
                            },
                            "progressBar": false, // No se muestra la barra de progreso
                            "controls": {
                                "input": [
                                    {
                                        "id": "Presión_Arterial",
                                        "name": "PresiónArterial",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Temperatura",
                                        "name": "Temperatura",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Peso",
                                        "name": "Peso",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    }
                                ],
                                "textarea": [
                                    {
                                        "id": "Detalles_de_la_Consulta",
                                        "name": "DetallesConsultaRAP",
                                        "value": "",
                                        "placeholder": "Ingrese Detalle de consulta",
                                        "rows": 4,
                                        "customWidth": "380px",
                                        "customHeight": "80px"
                                    }
                                ]
                            }
                        },
    
                        "RegistrarAtenciónBox": {
                            "title": "Registrar Atención Box",
                            "Container": {
                                "id": "containerRAB"
                            },
                            "progressBar": false, // No se muestra la barra de progreso
                            "controls": {
                                "input": [
                                    {
                                        "id": "Numero_de_Casilla",
                                        "name": "n_box",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    },
                                    {
                                        "id": "Nombre_del_Médico",
                                        "name": "NombreMédico",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "text",
                                        "required": true
                                    }
                                    ,
                                    {
                                        "id": "Fecha_de_Salida_de_Urgencia",
                                        "name": "Fecha_de_Salida_de_Urgencia",
                                        "value": "",
                                        "placeholder": "",
                                        "type": "datetime-local" // Permite captura de fecha y hora
                                    }
                                ],
                                "textarea": [
                                    {
                                        "id": "Farmacia",
                                        "name": "DetallesConsultaFarmaciaRAB",
                                        "value": "",
                                        "placeholder": "farmacia",
                                        "rows": 4,
                                        "customWidth": "380px",
                                        "customHeight": "80px"
                                    }
                                ],
                                "select": [
                                    {
                                        "id": "Destino",
                                        "name": "Destino",
                                        "required": true,
                                        "options": [
                                            { "value": "", "text": "Destino:" },
                                            { "value": "Alta Medica", "text": "Alta Medica" },
                                            { "value": "Hospitalizacion", "text": "Hospitalizacion" },
                                            { "value": "Cirugia", "text": "Cirugia" }
                                        ]
                                    }
                                ],
                                "checkbox": [
                                    {
                                        "id": "Laboratorio",
                                        "name": "LabExamenes",
                                        "required": true,
                                        "options": [
                                            {
                                                "id": "C1-234",
                                                "name": "C1-234",
                                                "value": "C1-234",
                                                "label": "C1-234"
                                            },
                                            {
                                                "id": "C1-233",
                                                "name": "C1-233",
                                                "value": "C1-233",
                                                "label": "C1-233"
                                            },
                                            {
                                                "id": "C1-232",
                                                "name": "C1-232",
                                                "value": "C1-232",
                                                "label": "C1-232"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "Tipo_de_examen",
                                        "name": "LabExamenes",
                                        "required": true,
                                        "options": [
                                            {
                                                "id": "Clase1",
                                                "name": "Clase1",
                                                "value": "Clase1",
                                                "label": "Clase 1"
                                            },
                                            {
                                                "id": "Clase2",
                                                "name": "Clase2",
                                                "value": "Clase2",
                                                "label": "Clase 2"
                                            },
                                            {
                                                "id": "Clase3",
                                                "name": "Clase3",
                                                "value": "Clase3",
                                                "label": "Clase 3"
                                            }
                                        ]
                                    }
                                ],
                                "radio": [
                                    {
                                        "id": "Licencia",
                                        "name": "Licencia",
                                        "required": true,
                                        "options": [
                                            {
                                                "id": "si",
                                                "name": "si",
                                                "value": "si",
                                                "label": "Si"
                                            },
                                            {
                                                "id": "no",
                                                "name": "no",
                                                "value": "no",
                                                "label": "No"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                }
            ];
            return  jsonData;
    }
    static getConfigViewConsultas()
    {
        const jsonData = [
            {
                "forms": {
                    "RegistrarUrgencia": {
                        "title": "Registrar Urgencia",
                        "Container": {
                            "id": "containerRU"
                        },
                        "progressBar": false,  // Esta propiedad determina si la barra de progreso se muestra
                        "controls": {
                            "input": [
                                {
                                    "id": "Nombre",
                                    "name": "nombre",
                                    "value": "",
                                    "placeholder": "",
                                    "type": "text",
                                    "required": true
                                },
                                {
                                    "id": "Apellido",
                                    "name": "apellido",
                                    "value": "",
                                    "placeholder": "",
                                    "type": "text",
                                    "required": true
                                },
                                {
                                    "id": "Run",
                                    "name": "run",
                                    "value": "",
                                    "placeholder": "Ingrese su identificador",
                                    "type": "text",
                                    "required": true
                                },
                                {
                                    "id": "Fecha_de_Ingreso",
                                    "name": "Fecha_de_Ingreso",
                                    "value": "",
                                    "placeholder": "Fecha de Ingreso",
                                    "type": "datetime-local" // Permite captura de fecha y hora
                                }
                            ],
                            "textarea": [
                                {
                                    "id": "Detalle_de_consulta",
                                    "name": "DetallesConsultaRU",
                                    "value": "",
                                    "placeholder": "Ingrese Detalle de consulta",
                                    "rows": 4,
                                    "customWidth": "380px",
                                    "customHeight": "80px"
                                }
                            ],
                            "radio": [
                                {
                                    "id": "Tipo_de_Urgencia",
                                    "name": "urgency",
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "AtenciónInmediata",
                                            "name": "urgency",
                                            "value": "Atención Inmediata",
                                            "label": "Atención Inmediata"
                                        },
                                        {
                                            "id": "Importante",
                                            "name": "urgency",
                                            "value": "Importante",
                                            "label": "Importante"
                                        },
                                        {
                                            "id": "Urgente",
                                            "name": "urgency",
                                            "value": "Urgente",
                                            "label": "Urgente"
                                        },
                                        {
                                            "id": "NoUrgente",
                                            "name": "urgency",
                                            "value": "No Urgente",
                                            "label": "No Urgente"
                                        }
                                    ]
                                }
                            ]
                        }
                    },

                    "RegistrarAtenciónBox": {
                        "title": "Registrar Atención Box",
                        "Container": {
                            "id": "containerRAB"
                        },
                        "progressBar": false, // No se muestra la barra de progreso
                        "controls": {
                            "input": [
                                {
                                    "id": "Numero_de_Casilla",
                                    "name": "n_box",
                                    "value": "",
                                    "placeholder": "",
                                    "type": "text",
                                    "required": true
                                },
                                {
                                    "id": "Nombre_del_Médico",
                                    "name": "NombreMédico",
                                    "value": "",
                                    "placeholder": "",
                                    "type": "text",
                                    "required": true
                                }
                                ,
                                {
                                    "id": "Fecha_de_Salida_de_Urgencia",
                                    "name": "Fecha_de_Salida_de_Urgencia",
                                    "value": "",
                                    "placeholder": "",
                                    "type": "datetime-local" // Permite captura de fecha y hora
                                }
                            ],
                            "textarea": [
                                {
                                    "id": "Farmacia",
                                    "name": "DetallesConsultaFarmaciaRAB",
                                    "value": "",
                                    "placeholder": "farmacia",
                                    "rows": 4,
                                    "customWidth": "380px",
                                    "customHeight": "80px"
                                }
                            ],
                            "select": [
                                {
                                    "id": "Destino",
                                    "name": "Destino",
                                    "required": true,
                                    "options": [
                                        { "value": "", "text": "Destino:" },
                                        { "value": "Alta Medica", "text": "Alta Medica" },
                                        { "value": "Hospitalizacion", "text": "Hospitalizacion" },
                                        { "value": "Cirugia", "text": "Cirugia" }
                                    ]
                                }
                            ],
                            "checkbox": [
                                {
                                    "id": "Laboratorio",
                                    "name": "LabExamenes",
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "C1-234",
                                            "name": "C1-234",
                                            "value": "C1-234",
                                            "label": "C1-234"
                                        },
                                        {
                                            "id": "C1-233",
                                            "name": "C1-233",
                                            "value": "C1-233",
                                            "label": "C1-233"
                                        },
                                        {
                                            "id": "C1-232",
                                            "name": "C1-232",
                                            "value": "C1-232",
                                            "label": "C1-232"
                                        }
                                    ]
                                },
                                {
                                    "id": "Tipo_de_examen",
                                    "name": "LabExamenes",
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Clase1",
                                            "name": "Clase1",
                                            "value": "Clase1",
                                            "label": "Clase 1"
                                        },
                                        {
                                            "id": "Clase2",
                                            "name": "Clase2",
                                            "value": "Clase2",
                                            "label": "Clase 2"
                                        },
                                        {
                                            "id": "Clase3",
                                            "name": "Clase3",
                                            "value": "Clase3",
                                            "label": "Clase 3"
                                        }
                                    ]
                                }
                            ],
                            "radio": [
                                {
                                    "id": "Licencia",
                                    "name": "Licencia",
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "si",
                                            "name": "si",
                                            "value": "si",
                                            "label": "Si"
                                        },
                                        {
                                            "id": "no",
                                            "name": "no",
                                            "value": "no",
                                            "label": "No"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            }
        ];
            return  jsonData;
    }
}