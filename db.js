const mysql = require("mysql2");

// Read configuration from environment variables
const DB_HOST = process.env.MYSQLHOST;
const DB_PORT = Number(process.env.MYSQLPORT) || 3306;   // dynamic port
const DB_USER = process.env.MYSQLUSER;
const DB_PASSWORD = process.env.MYSQLPASSWORD;
const DB_NAME = process.env.MYSQLDATABASE;

// Create pool
const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error connecting to database:", err.message);
    console.error("DB Config →", {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      database: DB_NAME
    });
    return;
  }

  console.log("✅ MySQL database connected successfully");
  connection.release();
});

module.exports = pool.promise();