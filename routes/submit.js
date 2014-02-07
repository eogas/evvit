
module.exports = function(app) {
	app.get('/submit', function(req, res) {
		res.render('submit.html');
	});

	app.post('/submit', function(req, res) {
		var title = req.body.title,
			url = req.body.url;

		console.log(req.body);

		req.models.Post.create([{
			title: title,
			url: url,
			date: new Date()
		}], function(err, items) {
			if (err) {
				console.log(err);
			}

			res.redirect('/');
		});
	});
};
