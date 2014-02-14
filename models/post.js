
module.exports = function(db) {
	var Post = db.define('post', {
		title: String,
		url: String,
		date: Date
	});

	Post.setRelations = function(relModels) {
		Post.hasOne('author', relModels.User, {
			reverse: 'posts',
			autoFetch: true
		});
	};

	return Post;
};
