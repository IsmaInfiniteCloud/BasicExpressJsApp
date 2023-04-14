// demoRoutes.js demo module

var express = require('express');
var router = express.Router();

// on ajoute les routes au router

// HOME PAGE ROUTE

router.get('/', function(req, res) {
  res.send('Demo home page');
});

// ABOUT PAGE ROUTE

router.get('/about', function(req, res) {
  res.send('About this demo');
});

// Dynamic view

router.get('/dynamic', function(req, res) {
  res.render('dynamic', { name: 'Ismail', title: 'Dynamic Title' });
});
router.post('/save',function(req,res) {
  res.send('I Received the information');
})

router.get('/details',function(req,res){
  res.send('Quering content :'+ req.query.id);
})
module.exports = router;
