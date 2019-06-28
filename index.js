const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/getUser', function (req, res) {
    var sql = "SELECT * FROM users";
    pool.query(sql, function (err, data) {
      res.json(data.rows);
    })
  })
  .post('/getUser', function (req, res) {
    var sqlinsert = "INSERT INTO poll (question, start_date, end_date) VALUES ('What is your favorite Animal?', '2019-06-28', '2019-07-04')";
    pool.query(sqlinsert, function (err, data) {
      res.json(data.rows);
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



