
module.exports = function(sequelize, DataTypes) {
    var Vote = sequelize.define('Vote', {
        value: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Vote.hasOne(models.User, {as: 'voter'});
                Vote.hasOne(models.Post, {as: 'post'});
                Vote.hasOne(models.Comment, {as: 'comment'});
            }
        }
    });

    return Vote;
};
