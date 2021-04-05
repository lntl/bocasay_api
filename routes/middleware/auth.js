
const axios = require('axios')

module.exports = (req, res, next) => {
    let jwt= req.query.jwt;
    axios.get('http://127.0.0.1:8000/api/auth/login?jwt='+req.query.jwt).then(function (response) {
      //REQ = TRUE = ADMIN
      console.log(response.data.jwt);
      next();
    }).catch((error)=>{
      res.send(error.response.data);
    })
};