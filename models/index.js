
var orm = require('orm');

module.exports = function(app) {
	app.use(orm.express('mysql://evvit:evvit@localhost/evvit', {
		define: function(db, models) {
			models.Post = require('./post.js')(db);
			models.User = require('./user.js')(db);

			// synchronize models to create tables
			db.sync(function(err) {
				console.log(err || 'ORM: tables synchronized!');
			});

			// export the models
			for (var model in models) {
				module.exports[model] = models[model];
			}
		}
	}));
};
