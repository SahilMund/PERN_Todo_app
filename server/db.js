const Pool = require("pg").Pool;

// pg helps to communicate nodejs with postgres

const pool = new Pool({
  user: "postgres",
  password: "kthl8822",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
