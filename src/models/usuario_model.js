const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../connection')

const TipoDocumento = require('./tipo_documento_model')
const TipoUsuario = require('./tipo_usuario_model')

class Usuario extends Model { }
Usuario.init(
    {
        id_tipo_documento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tipo_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        documento: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        latitud: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        longitud: {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
    },
    {
        paranoid: true,
        sequelize,
        modelName: 'Usuario',
        timestamps: true,
    }

)

Usuario.belongsTo(TipoDocumento, { foreignKey: 'id_tipo_documento'})
Usuario.belongsTo(TipoUsuario, { foreignKey: 'id_tipo_usuario'})

const sync = async () => {
    await Usuario.sync({ force: false })
}

sync()

module.exports = Usuario