# Getting Started bocasay_api
Bocasay Api connect to bocasay symfony user manager

## Before All
Change the config database into index.js at line 19
const db = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bocasay_api'
});

## Deploy/Install BDD into your database manager (SQL only)
### `cd bocasayapi` => bocasay_api.sql

## How to install
In the project directory, you can run:
### `npm install`

## How to run
You can run nodemon to run always if merge change on IDE with this cmd :
### `nodemon index.js`
Or you can do only :
### `node index.js`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333).