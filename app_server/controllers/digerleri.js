var express = require('express');
var router = express.Router();

/* GET home page. */
const hakkinda = function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', footer:'Ömercan Akşen 2021' });
};

module.exports={
  hakkinda
}