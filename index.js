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
  .post('/viewPoll', function (req, res) {
    var sqlview = "SELECT * FROM poll";
    pool.query(sqlview, function (err, data) {
      res.json(data.rows);
    })
  })
  .post('/addPoll', function (req, res) {
    var sql = "INSERT INTO poll (question, start_date, end_date) VALUES ($1, NOW(), $2) RETURNING id;"
    pool.query(sql, [req.body.question, req.body.end], function (err, data) {
    	var sqli = "INSERT INTO input(poll_id, input, count, why) VALUES ($1, $2, 0, '')";
    	var ct = 0;
    	var ans = req.body.answer.split('-');
    	for (var i = 0; i < ans.length - 1; i++) {
    		pool.query(sqli, [data.rows[0].id, ans[i]], function (err, data) {
    			if (ct == ans.length - 1) {
    				res.json({Message: "Added to the database"});
    			}
    		})
    		ct++;
    	}
    }) 
  })
  .get('/viewThePoll', function (req, res) {
  	var sql = "SELECT poll.question, input.input, input.id FROM poll INNER JOIN input ON poll.id = input.poll_id WHERE poll_id = $1";
  	pool.query(sql, [req.query.question], function (err, data) {
  		res.json(data.rows);
  	})
  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



