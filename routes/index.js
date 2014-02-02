
module.exports = function(app) {
	// export all of the routes
	exports.home = require('./home.js')(app);
};
