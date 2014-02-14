
var orm = require('orm');

module.exports = function(app) {
	app.use(orm.express('mysql://evvit:evvit@localhost/evvit', {
		define: function(db, models) {
			// set up models
			models.User = require('./user.js')(db);
			models.Post = require('./post.js')(db);
			models.Comment = require('./comment.js')(db);

			// set up relations
			for (var model in models) {
				if (models[model].setRelations) {
					models[model].setRelations(models);
				}
			}

			// synchronize models to create tables
			db.sync(function(err) {
				console.log(err || 'ORM: tables synchronized!');
			});

			// export the models
			for (model in models) {
				module.exports[model] = models[model];
			}
		}
	}));
};
