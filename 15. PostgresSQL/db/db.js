import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pkg;

// const pool = new Pool({
//   user: postgres,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: postgres,
//   port: 5432,
// });
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

export default pool;