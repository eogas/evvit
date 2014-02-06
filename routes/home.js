
module.exports = function(app) {
	app.get('/', function(req, res) {

		req.models.Post.create([{
			title: 'Floating point error is the least of my worries',
			url: 'http://www.johndcook.com/blog/2011/11/01/floating-point-worries/',
			date: new Date()
		}], function(err, items) {
			console.log(err || items);
		});

		var posts;

		res.render('home.html', {
			posts: posts
		});
	});
};
