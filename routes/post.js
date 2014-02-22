
var util = require('../util.js');

var walkComments = function(comments, cb) {
	var head = util.head(comments),
		tail = util.tail(comments);

	if (!head) {
		cb();
	} else {
		head.getChildren(function(err, subComments) {
			// step into children
			walkComments(subComments, function() {
				// continue with siblings
				walkComments(tail, cb);
			});
		});
	}
};

module.exports = function(app) {
	app.get('/post/:id', function(req, res) {
		var postId = req.params.id;

		req.models.Post.get(postId, function(err, post) {
			if (err) {
				console.log(err);
				return;
			}

			post.getComments(function(err, comments) {
				if (err) {
					console.log(err);
					return;
				}

				walkComments(comments, function() {
					res.render('post.html', {
						post: post,
						user: req.user
					});
				});
			});
		});
	});
};
