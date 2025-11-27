module.exports = (sequelize, DataTypes) => {
  const Fuente = sequelize.define('Fuente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 255]
      }
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo_evento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fuentes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Fuente.associate = function(models) {
    Fuente.belongsTo(models.User, { foreignKey: 'idUser', as: 'usuario' });
    Fuente.belongsToMany(models.User, { through: models.Asistencia, foreignKey: 'idEvento', as: 'asistentes' });
  };

  return Fuente;
};
