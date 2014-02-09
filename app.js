
var express = require('express'),
	app = express(),
	swig = require('swig'),
	passport = require('passport');

var models = require('./models')(app);

// express config
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({ secret: 'mysupersecretsecretchangethis' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// integrate swig into express
app.engine('html', swig.renderFile);
app.set('view_engine', 'html');
app.set('views', __dirname + '/views');

// TODO: Enable one of these by default, and disable it in dev mode
app.set('view cache', false);
swig.setDefaults({ cache: false });

var auth = require('./auth'),
	routes = require('./routes')(app);

app.listen(8080);
console.log('Listening on port 8080...');
