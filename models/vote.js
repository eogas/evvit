
module.exports = function(db) {
    var Vote = db.define('vote', {
        value: int
    });

    Vote.setRelations = function(relModels) {
        Vote.hasOne('voter', relModels.User, {
            reverse: 'votes'
        });

        Vote.hasOne('post', relModels.Post, {
            reverse: 'votes'
        });

        Vote.hasOne('comment', relModels.Comment, {
            reverse: 'votes'
        });
    };

    return Vote;
};
