
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Vote, {as: 'votes'});
                User.hasMany(models.Post, {as: 'posts'});
                User.hasMany(models.Comment, {as: 'comments'});
            }
        }
    });

    return User;
};
