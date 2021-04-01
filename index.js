const express = require('express'),
			bodyParser = require('body-parser'),
			cors = require('cors'),
			mysql = require('mysql'),
			app = express(),
			port = 3000

/*APP USE CONFIG*/
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
app.use(require('./routes'));

/*APP CONNECT DB*/
const db = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bocasay_api'
});
db.connect((err) => {
	if (err) { throw err; }
	console.log('Connection to DDB --> OK');
});
global.db = db;

/*SERVER START*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})