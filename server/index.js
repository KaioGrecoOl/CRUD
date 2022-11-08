const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require('dotenv/config');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { category } = req.body;

  let mysql = "INSERT INTO games ( name, price, category) VALUES (?, ?, ?)";
  db.query(mysql, [name, price, category], (err, result) => {
      console.log(err);
    })
})

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM games";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3003, () => {
  console.log('Escutando porta 3003');
})

