
module.exports = function(app) {
	app.get('/post/:id', function(req, res) {
		var postId = req.params.id;

		req.models.Post.get(postId, function(err, post) {
			if (err) {
				console.log(err);
				return;
			}

			res.render('post.html', {
				post: post,
				user: req.user
			});
		});
	});
};
