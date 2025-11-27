const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Aquí puedes importar y definir tus modelos
// Importar modelos
db.User = require('./user')(sequelize, DataTypes);
db.Publicacion = require('./publicacion')(sequelize, DataTypes);
db.Comentario = require('./comentario')(sequelize, DataTypes);
db.Fuente = require('./fuente')(sequelize, DataTypes);
db.Asistencia = require('./asistencia')(sequelize, DataTypes);

// Definir asociaciones aquí
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;