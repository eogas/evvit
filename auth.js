
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	bcrypt = require('bcrypt'),
	models = require('./models');

passport.serializeUser(function(user, done) {
	done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	models.User.find({
		username: username
	}, 1, done);
})

passport.use(new LocalStrategy(function(username, password, done) {
	models.User.find({
		username: username
	}, 1, function(err, user) {
		if (err) {
			return done(err);
		}

		if (user.length < 1) {
			return done(null, false, {
				message: 'Invalid username or password.'
			});
		}

		bcrypt.compare(password, user.password, function(err, res) {
			if (err) {
				return done(err);
			}

			if (res) {
				return done(null, user);
			} else {
				return done(null, false, {
					message: 'Invalid username or password.'
				});
			}
		});
	});
}));
