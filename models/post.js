
module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                Post.hasOne(models.User, {as: 'author'});

                Post.hasMany(models.Comment, {as: 'comments'});
            },
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

    return Post;
};
