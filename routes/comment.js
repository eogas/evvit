
module.exports = function(app) {
	app.post('/post/:postid/comment', function(req, res) {
		var postId = req.params.postid,
			text = req.body.text;

		req.models.Post.get(postId, function(err, post) {
			if (err) {
				console.log(err);
				return;
			}

			req.models.Comment.create([{
				parentPost: post,
				author: req.user,
				text: text,
				date: new Date()
			}], function(err, items) {
				if (err) {
					console.log(err);
					return;
				}

				res.redirect('/post/' + postId);
			});
		});
	});
};
