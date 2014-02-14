
var models = require('../models');

module.exports = function(db) {
	var Post = db.define('post', {
		title: String,
		url: String,
		date: Date
	});

	return Post;
};
