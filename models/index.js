
var orm = require('orm');

module.exports = function(app) {
	app.use(orm.express('mysql://evvit:evvit@localhost/evvit', {
		define: function(db, models) {
			models.Post = require('./post.js')(db);

			// scynchronize models to create tables
			db.sync(function(err) {
				console.log(err || 'ORM: tables synchronized!');
			});
		}
	}));
};
