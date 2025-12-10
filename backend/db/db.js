const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  user: process.env.POSTGRES_USER || 'matcha',
  password: process.env.POSTGRES_PASSWORD || 'matcha_pass',
  database: process.env.POSTGRES_DB || 'matcha_db',
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};