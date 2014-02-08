
module.exports = function(app) {
	app.get('/', function(req, res) {
		req.models.Post.find({}, "date", function(err, posts) {
			if (err) {
				console.log(err);
			}

			res.render('home.html', {
				posts: posts
			});
		});
	});
};
