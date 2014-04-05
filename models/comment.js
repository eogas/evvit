
module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        text: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                Comment.hasOne(models.User, {as: 'author'});
                Comment.hasOne(models.Post, {as: 'parentPost'});
                Comment.hasOne(models.Comment, {as: 'parentComment'});

                Comment.hasMany(models.Comment, {as: 'children'});
            }
        }
    });

    return Comment;
};
