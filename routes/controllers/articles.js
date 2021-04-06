const SqlString = require('sqlstring');

exports.getAll = (req, res, next) => {
	let prom = new Promise((resolve, results) => {
    let query = "SELECT * FROM articles";
    db.query(query, (err, articles) => {
			return results(articles)
    })
  })
	prom.then().catch((error) => {
		res.send(error);
	});
};

exports.create = (req, res, next) => {
	let prom = new Promise((resolve, results) => {
    let query = "INSERT INTO articles (author, user_id, title,content) VALUES ("+SqlString.escape(req.body.author)+", "+SqlString.escape(req.body.user_id)+","+SqlString.escape(req.body.title)+","+SqlString.escape(req.body.content)+")";
		console.log(query);
    db.query(query, (err, articles) => {
			return results(articles)
    })
  })
	prom.then().catch((error) => {
		res.send(error);
	});
};

exports.getOne = (req, res, next) => {};
exports.modify = (req, res, next) => {};

exports.delete = (req, res, next) => {
	let prom = new Promise((resolve, results) => {
    let query = "DELETE FROM articles WHERE id="+req.query.id;
    db.query(query, (err, articles) => {
			return results(articles)
    })
  })
	prom.then().catch((error) => {
		res.send(error);
	});
};
