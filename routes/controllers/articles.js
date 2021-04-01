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

exports.create = (req, res, next) => {};
exports.getOne = (req, res, next) => {};
exports.modify = (req, res, next) => {};
exports.delete = (req, res, next) => {};
