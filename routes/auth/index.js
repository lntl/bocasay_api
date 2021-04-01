
const	axios = require('axios'),
      qs = require('qs'),
      express = require('express'),
      router = express.Router(),
      jwt_decode = require('jwt-decode');

router.use(function(req, res, next) {
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
    res.send(jwt);
  }).catch(function(error) {
    res.send(false);
  })
});


module.exports = router;