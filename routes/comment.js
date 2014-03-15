
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


    app.post('/comment/:id/reply', function(req, res) {
        var commentId = req.params.id,
            postId = req.query.post,
            text = req.body.text;

        req.models.Comment.get(commentId, function(err, comment) {
            if (err) {
                console.log(err);
                return;
            }

            req.models.Comment.create([{
                parentComment: comment,
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
