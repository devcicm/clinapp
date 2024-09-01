from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS
import os
import json
from werkzeug.exceptions import HTTPException

app = Flask(__name__, template_folder='templates')
CORS(app)  

#Mensaje de error en HTTP
@app.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = json.dumps({
        "code": e.code,
        "name": e.name,
        "description": e.description,
    })
    response.content_type = "application/json"
    return response
def custom_error(message, status_code): 
    return make_response(jsonify(message), status_code)
 # Views
@app.route('/', methods=['GET'])
def index():
    return render_template('/index.html')
#Repository

# Obtén la ruta absoluta del directorio donde se encuentra el script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construye la ruta completa al archivo JSON basado en la ubicación del script
json_file_path = os.path.join(script_dir, 'data', 'data.json')

# Función para cargar datos desde el archivo JSON
def load_data():
    if not os.path.exists(json_file_path):
        with open(json_file_path, 'w') as file:
            json.dump([], file)

    with open(json_file_path, 'r') as file:
        return json.load(file)

# Función para guardar datos en el archivo JSON
def save_data(data):
    with open(json_file_path, 'w') as file:
        json.dump(data, file, indent=2)


#Controllers

 
# CREATE - Insertar un nuevo registro
@app.route('/crear', methods=['POST'])
def guardar_json():
    new_data = request.json  # Flask interpreta automáticamente el JSON entrante
    if not new_data:
        return jsonify({"message": "No se han recibido datos"}), 400  # Devuelve un error 400 si no hay datos
    
    data = load_data()
    data.append(new_data)
    save_data(data)
    return jsonify({"message": "Datos guardados exitosamente"}), 200

# READ - Obtener todos los registros o uno específico
@app.route('/registro', methods=['GET'])
@app.route('/registro/<int:id>', methods=['GET'])
def obtener_registro(id=None):
    data = load_data()
    if id is None:
        return jsonify(data), 200
    else:
        registro = next((item for item in data if int(item["id_Registro"]) == id), None)
        if registro:
            return jsonify(registro), 200
        else:
            return jsonify({"message": "Registro no encontrado"}), 404

# UPDATE - Actualizar un registro existente
@app.route('/actualizar-json/<int:id>', methods=['PUT'])
def actualizar_registro(id):
    updated_data = request.json
    data = load_data()
    for i, registro in enumerate(data):
        if int(registro["id_Registro"]) == id:
            data[i] = updated_data
            save_data(data)
            return jsonify({"message": "Registro actualizado exitosamente"}), 200
    return jsonify({"message": "Registro no encontrado"}), 404

# DELETE - Eliminar un registro específico
@app.route('/eliminar-json/<int:id>', methods=['DELETE'])
def eliminar_registro(id):
    data = load_data()
    data = [registro for registro in data if int(registro["id_Registro"]) != id]
    save_data(data)
    return jsonify({"message": "Registro eliminado exitosamente"}), 200


#Metodo de debug
@app.route('/debugJson', methods=['GET'])
@app.route('/debugJson/<int:id>', methods=['GET'])
def obtener_registro_debug(id=None):
    if id is None:
        return jsonify(registros), 200
    else:
        registro = next((item for item in registros if int(item["id_Registro"]) == id), None)
        if registro:
            return jsonify(registro), 200
        else:
            return jsonify({"message": "Registro no encontrado"}), 404



registros = [
  {
    "id_Registro": "1",
    "datepicker": "08/18/2024",
    "Precio_Consulta": "34",
    "Menu_id_paciente": "Paciente 1",
    "Menu_id_cups": "Procedimiento 1",
    "Finalidad_Consulta": "Opción 1",
    "causa_externa": "Opción 1",
    "id_diagnostico_principal": "Opción 1"
  },
  {
    "id_Registro": "2",
    "datepicker": "08/19/2024",
    "Precio_Consulta": "33",
    "Menu_id_paciente": "Paciente 1",
    "Menu_id_cups": "Procedimiento 2",
    "Finalidad_Consulta": "Opción 2",
    "causa_externa": "Opción 1",
    "id_diagnostico_principal": "Opción 2"
  },
  {
    "id_Registro": "3",
    "datepicker": "08/19/2024",
    "Precio_Consulta": "34",
    "Menu_id_paciente": "Paciente 2",
    "Menu_id_cups": "Procedimiento 2",
    "Finalidad_Consulta": "Opción 2",
    "causa_externa": "Opción 1",
    "id_diagnostico_principal": "Opción 1"
  } 
]



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5500, debug=True)
