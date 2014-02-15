
module.exports = function(app) {
	// export all of the routes
	exports.home = require('./comment.js')(app);
	exports.home = require('./home.js')(app);
	exports.home = require('./login.js')(app);
	exports.home = require('./post.js')(app);
	exports.home = require('./register.js')(app);
	exports.home = require('./submit.js')(app);
};
