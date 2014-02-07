
module.exports = function(app) {
	app.get('/', function(req, res) {
		var posts;

		res.render('home.html', {
			posts: posts
		});
	});
};
