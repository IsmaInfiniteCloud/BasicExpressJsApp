var express = require('express');
var router = express.Router();
var htmlDir ='./html'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express changing' });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  console.log(__dirname);
  res.sendFile(htmlDir + '/about.html');
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  console.log(__dirname);
  res.sendFile(htmlDir + '/contact.html');
});

module.exports = router;
