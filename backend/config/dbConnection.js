const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_URI,
});

pool.on('connect', () => {
  console.log('Conectado a la base de datos PostgreSQL');
});

module.exports = pool;
