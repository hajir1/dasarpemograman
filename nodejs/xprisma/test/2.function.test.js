import mysql from "mysql"
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

const name = 'hajir';
const age = 17;

const sql = 'SELECT * FROM users WHERE name = ? AND age = ?';

connection.query(sql, [name, age], (error, results) => {
  if (error) {
    throw error;
  }
  console.log(results);
});

connection.end();
