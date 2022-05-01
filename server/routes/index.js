var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  console.log("eeee")
  //res.render('index.html', { title: 'Express' });
  //console.log(path.resolve("../") + "public/index.html")

});

module.exports = router;
