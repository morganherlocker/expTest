
/*
 * GET home page.
 */
var os = require('os');
 
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.home = function(req, res){
  res.render('home', { title: 'HOMEpage' });
};

exports.login = function(req, res){
  res.render('login', { title: 'LOGINpage' });
};

exports.info = function(req, res){
  res.render('info', { title: 'INFOpage' , OS Type: os.type()});
};

//exports.json = function(req, res){
//  res.render('json', null);
//};
