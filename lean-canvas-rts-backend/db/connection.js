const mysql = require("mysql2/promise");  

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER ||"lcrts",
  password: process.env.DB_PASS ||"RootPass1!",
  database: process.env.DB_SCHEMA ||"lean_canvas_rts",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
