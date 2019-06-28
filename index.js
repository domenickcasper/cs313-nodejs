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
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



