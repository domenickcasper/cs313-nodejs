const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/calculate', (req, res) =>  {

  	var weight = req.query.weight;
  	var type = req.query.type;
  	var cost = 0;

  	switch (type) {
  		case 'stampedLetter':
  			if (weight >= 3.0) {
  				cost = 1.00;
  			}
  			else {
  				cost = .55 + (Math.floor(weight) * .15);
  			}
  			break;
  		case 'meteredLetter':
  			if (weight >= 3.0) {
  				cost = .95;
  			}
  			else {
  				cost = .50 + (Math.floor(weight) * .15);
  			}
  			break;
  		case 'envelopesLarge':
  			if (weight >= 13) {
  				cost = 2.80;
  			}
  			else {
  				cost = 1.00 + (Math.floor(weight) * .15);
  			}
  			break;
  		case 'firstClass':
  			if (weight >= 13) {
  				cost = 5.71;
  			}
  			else if (weight >= 9) {
  				cost = 5.19;
  			}
  			else if (weight >= 5) {
  				cost = 4.39;
  			}
  			else {
  				cost = 3.66;
  			}
  	}
	res.render('pages/getdata', {"Total": cost})
  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



