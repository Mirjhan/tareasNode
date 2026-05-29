const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../connection')

class TipoUsuario extends Model { }
TipoUsuario.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        paranoid: true,
        sequelize,
        modelName: 'Tipo_Usuario',
        timestamps: true,
    }
);

const sync = async() => {
    await TipoUsuario.sync({ force: false })
}

sync()

module.exports = TipoUsuario