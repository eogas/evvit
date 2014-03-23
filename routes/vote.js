
module.exports = function(app) {
    app.post('/vote/:postId/:value', function(req, res) {
        var postId = req.params.postId,
            value = req.params.value;

        value = { up: 1, down: -1, none: 0 }[value];

        if (value === undefined) {
            console.log('/vote/:postid/value - Invalid vote value');
            return;
        }

        req.models.Post.get(postId, function(err, post) {
            if (err) {
                console.log(err);
                return;
            }

            req.models.Vote.find({
                voter: req.user,
                post: post
            }, function(err, votes) {
                var currentVote = votes[0];

                if (!currentVote) {
                    req.models.Vote.create([{
                        voter: req.user,
                        post: post,
                        value: value
                    }], function(err, newVotes) {
                        if (err) {
                            console.log(err);
                        } else {
                            post.getVotes(function(err, votes) {
                                res.send(200);
                            });
                        }
                    });
                } else {
                    currentVote.save({
                        value: value
                    }, function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(200);
                        }
                    });
                }
            });
        });
    });
};
