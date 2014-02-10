
var bcrypt = require('bcrypt'),
	models = require('../models');

module.exports = function(app) {
	app.post('/register', function(req, res) {
		var username = req.body.regUsername,
			password = req.body.regPassword,
			repeatedPass = req.body.regRepeatedPass;

		// invalid user or pass
		if (username.length < 1 ||
			password.length < 1 ||
			password !== repeatedPass) {
			res.redirect('/');
			return;
		}

		models.User.find({
			username: username
		}, 1, function(err, users) {

			// username is in use
			if (users.length > 0) {
				res.redirect('/');
				return;
			}

			// hash the password
			bcrypt.hash(password, 12, function(err, hash) {
				if (err) {
					console.log(err);
					return;
				}

				// all is well, create the user
				models.User.create([{
					username: username,
					password: hash
				}], function(err, users) {
					if (err) {
						console.log(err);
						return;
					}

					// login
					res.redirect(307, '/login');
				});
			});
		});
	});
};
