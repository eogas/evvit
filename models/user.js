
var models = require('../models');

module.exports = function(db) {
	var User = db.define('user', {
		username: String,
		password: String
	});

	return User;
};
