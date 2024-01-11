import express from "express";
import mysql from "mysql"
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'belajar_prisma' // Ganti dengan nama basis data Anda
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as ID ' + db.threadId);
});
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get('/users', (req, res) => {
  db.query('SELECT * FROM pelanggan', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).json({ error: 'Error fetching users' });
      return;
    }
    res.json(results);
  });
});
app.get('/orders', (req, res) => {
  db.query('SELECT * FROM Orders', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).json({ error: 'Error fetching users' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
