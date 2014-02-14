
var orm = require('orm');

module.exports = function(app) {
	app.use(orm.express('mysql://evvit:evvit@localhost/evvit', {
		define: function(db, models) {
			// set up models
			models.User = require('./user.js')(db);
			models.Post = require('./post.js')(db);

			// set up relations
			// TODO: Encapsulate this in the models and just
			// iterate over them to set up relations.
			models.Post.hasOne('author', models.User, {
				reverse: 'posts',
				autoFetch: true
			});

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
