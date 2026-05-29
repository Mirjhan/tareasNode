const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../connection')

class Incidencia extends Model { }
Incidencia.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        estado: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        paranoid: true,
        sequelize,
        modelName: 'Incidencia',
        timestamps: true,
    }

);


const sync = async () => {
    await Incidencia.sync({ force: false })
}

sync()

module.exports = Incidencia