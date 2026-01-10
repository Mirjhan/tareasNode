const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('incidencias', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully. :3 ');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { conectar, sequelize }