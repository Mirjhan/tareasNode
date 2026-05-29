const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../connection')

class TipoDocumento extends Model { }
TipoDocumento.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    },
    {
        paranoid: true,
        sequelize,
        modelName: 'Tipo_Documento',
        timestamps: true,
    }
);

const sync = async () => {
    await TipoDocumento.sync({ force: false })
}

sync()

module.exports = TipoDocumento