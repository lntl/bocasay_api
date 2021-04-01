const express = require('express'),
			router = express.Router(),
			auth = require('../middleware/auth'),
			articleCtl = require('../controllers/articles');

//THE ARTICLES WAS PROTECTED BY MIDDLEWARE AUTH GET JWT
router.get('/list', auth, articleCtl.getAll);
//router.post('/create', auth, articleCtl.create);
//router.get('/:id', auth, articleCtl.getOne);
//router.put('/:id', auth, articleCtl.modify);
//router.delete('/:id', auth, articleCtl.delete);

module.exports = router;