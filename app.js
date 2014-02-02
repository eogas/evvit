var express = require('express'),
	app = express(),
	swig = require('swig');

// express config
app.engine('html', swig.renderFile);
app.set('view_engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

var routes = require('./routes')(app);

app.listen(8080);
console.log('Listening on port 8080...');
