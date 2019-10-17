/*jshint esversion: 8 */

const express = require("express");
const sivecPortal = require('./sivecPortal.js');

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/api", (req, res, next) => {
  getResult().then((obj) => {
    res.json(obj);
  });
});

async function getResult() {
  const obj = await sivecPortal();
  return obj;
}

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tb_pessoa_fisica", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
