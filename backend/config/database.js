const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_URI, {
  dialect: 'postgres',
});

const connectDevDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    throw error;
  }
};

module.exports = { sequelize, connectDevDB };
