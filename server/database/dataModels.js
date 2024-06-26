const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.URI;

//postgresql:// [username]:[pw]@[Google connection]:5432/[database name]
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
