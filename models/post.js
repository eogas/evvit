
module.exports = function(db) {
    var Post = db.define('post', {
        title: String,
        url: String,
        date: Date
    }, {
        methods: {
            score: function() {
                var score = 0;

                this.votes.forEach(function(vote) {
                    score += vote.value;
                });

                return score;
            },
            userScore: function(user) {
                var score = 0;

                // TODO: there has to be a better way to do this
                for (var i = 0; i < this.votes.length; i++) {
                    if (this.votes[i].voter.id === user.id) {
                        score = this.votes[i].value;
                        break;
                    }
                }

                return score;
            }
        }
    });

    Post.setRelations = function(relModels) {
        Post.hasOne('author', relModels.User, {
            reverse: 'posts',
            autoFetch: true
        });
    };

    return Post;
};
