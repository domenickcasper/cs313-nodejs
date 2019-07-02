const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .get('/getUser', function (req, res) {
    var sql = "SELECT * FROM users";
    pool.query(sql, function (err, data) {
      res.json(data.rows);
    })
  })
  .post('/viewPoll', function (req, res) {
    var sqlview = "SELECT * FROM poll";
    pool.query(sqlview, function (err, data) {
      res.json(data.rows);
    })
  })
  .post('/addPoll', function (req, res) {
    console.log(req.body);
    res.json({});
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



