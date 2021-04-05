
const	axios = require('axios'),
      qs = require('qs'),
      express = require('express'),
      router = express.Router(),
      jwt_decode = require('jwt-decode');
      
router.post('/getjwt', function(req, res, next) {
  axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/auth/login', 
    data : qs.stringify({
      email: req.body.email,
      password: req.body.password
    }),
    headers:{
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(function(response) {
    var jwt = jwt_decode(response.data.jwt);
    res.send(response.data.jwt);
  }).catch(function(error) {
    res.send(false);
  })
})


module.exports = router;