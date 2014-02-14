
module.exports = function(db) {
	var Comment = db.define('comment', {
		text: String,
		date: Date
	});

	Comment.setRelations = function(relModels) {
		Comment.hasOne('parentPost', relModels.Post, {
			reverse: 'comments',
			autoFetch: true
		});

		Comment.hasOne('parentComment', relModels.Comment, {
			reverse: 'children',
			autoFetch: true
		});
	};

	return Comment;
};
