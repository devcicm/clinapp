
import { verbose } from 'sqlite3';

const db = new verbose.Database('./database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS urgencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha_ingreso TEXT NOT NULL,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    identityNumber TEXT NOT NULL,
    textInput TEXT NOT NULL,
    prioridad TEXT NOT NULL
  )`);
});

export default db;
