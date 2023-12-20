const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

const db = new sqlite3.Database("./gik339-labb2.db");

server.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) res.status(500).send(err);
    else res.send(rows);
  });
});

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
