const { Sequelize } = require('sequelize')
const {
    HOST,
    DATABASE,
    USER,
    PASSWORD,
    DIALECT_DATABASE,
} = process.env

const sequelize = new Sequelize( DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT_DATABASE,
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