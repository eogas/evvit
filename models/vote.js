
module.exports = function(db) {
    var Vote = db.define('vote', {
        value: Number
    });

    Vote.setRelations = function(relModels) {
        Vote.hasOne('voter', relModels.User, {
            reverse: 'votes',
            autoFetch: true
        });

        Vote.hasOne('post', relModels.Post, {
            reverse: 'votes',
            autoFetch: true
        });

        Vote.hasOne('comment', relModels.Comment, {
            reverse: 'votes',
            autoFetch: true
        });
    };

    return Vote;
};
