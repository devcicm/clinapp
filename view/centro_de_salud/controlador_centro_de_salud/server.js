import express from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = 3000;

// Configurar el middleware para analizar cuerpos JSON y URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// aqui debes buscar la ruta de los archivos html donde esta el form
app.use(express.static('public'));

// esta es la ruta del form; en el grupo raiz de visual funciono, hay que ver la rut /dubmit
app.post('/submit', (req, res) => {
  const { fecha_ingreso, nombre, apellido, identityNumber, textInput, flexRadioDefault } = req.body;

  const prioridad = flexRadioDefault || 'Importante';

  db.run(`INSERT INTO urgencias (fecha_ingreso, nombre, apellido, identityNumber, textInput, prioridad) VALUES (?, ?, ?, ?, ?, ?)`,
    [fecha_ingreso, nombre, apellido, identityNumber, textInput, prioridad],
    function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.send('Formulario registrado con éxito');
    }
  );
});

// desde terminal lo levante, realiza las configuraciones para levantar aca
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
