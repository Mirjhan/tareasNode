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
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
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
    await Incidencia.sync({ alter: false })

    // FORCE -> fuerzas, se elimina todo (tabla y registros) y se vuelve a crear  
    // ALTER -> alterar, el tratara de hacer el cambio si es viable.
}

sync()

module.exports = Incidencia