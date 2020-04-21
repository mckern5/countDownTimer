var express = require('express');
var router = express.Router();

var launchTime=new Date("04/20/2020 10:00").getTime();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var currentTime=new Date().getTime();
  var numberOfMilliseconds=parseInt(launchTime-currentTime);
  res.render('index',{title: 'Countdown to launch', countDown: numberOfMilliseconds});
  


});

module.exports = router;
