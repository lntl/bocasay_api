
const jwt_decode = require('jwt-decode'),
			axios = require('axios'),
			qs = require('qs');

module.exports = (req, res, next) => {
	
  if(!req.query.jwt){
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/auth/login', 
      data : qs.stringify({
        email: "luc.natale@gmail.com",
        password: "Bocasay2021"
      }),
      headers:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(function(response) {
      var jwt = jwt_decode(response.data.jwt);
      next();
    }).catch(function(error) {
      res.send('Middleware / user error login');
    })
  } else {
    var jwt = jwt_decode(req.query.jwt);
    next();
  }
  
};