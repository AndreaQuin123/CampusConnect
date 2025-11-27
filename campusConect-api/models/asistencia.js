module.exports = (sequelize, DataTypes) => {
  const Asistencia = sequelize.define('Asistencia', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    idEvento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fuentes',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    tableName: 'asistencia',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Asistencia.associate = function(models) {
    // Las asociaciones ya están definidas en User y Fuente
  };

  return Asistencia;
};
