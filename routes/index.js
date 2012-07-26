
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
  res.render('info', { title: 'INFOpage' , OSType: os.type()});
};

exports.json = function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var jsonObject = ['this', 'is', 'a', 'test']
	res.write(JSON.stringify(jsonObject))
	res.end()
};
