
module.exports = function(app) {
	app.get('/comments/:id', function(req, res) {
		var postId = req.params.id;

		req.models.Post.get(postId, function(err, post) {
			if (err) {
				console.log(err);
			}

			res.render('comments.html', {
				post: post,
				user: req.user
			});
		});
	});
};
