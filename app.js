
var express = require('express'),
	app = express(),
	swig = require('swig');

var models = require('./models')(app);

// express config
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

// integrate swig into express
app.engine('html', swig.renderFile);
app.set('view_engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

var routes = require('./routes')(app);

app.listen(8080);
console.log('Listening on port 8080...');
