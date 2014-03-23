
module.exports = function(db) {
    var Comment = db.define('comment', {
        text: String,
        date: {
            type: 'date',
            time: true
        }
    });

    Comment.setRelations = function(relModels) {
        Comment.hasOne('author', relModels.User, {
            reverse: 'comments',
            autoFetch: true
        });

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
