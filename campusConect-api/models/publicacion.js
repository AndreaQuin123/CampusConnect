module.exports = (sequelize, DataTypes) => {
  const Publicacion = sequelize.define('Publicacion', {
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
    Contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Categoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'publicaciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Publicacion.associate = function(models) {
    Publicacion.belongsTo(models.User, { foreignKey: 'idUser', as: 'usuario' });
    Publicacion.hasMany(models.Comentario, { foreignKey: 'idPublicacion', as: 'comentarios' });
  };

  return Publicacion;
};
