
var models = require('../models');

module.exports = function(app) {
    app.get('/', function(req, res) {
        models.Post.findAll({order: 'date DESC'})
        .success(function(posts) {
            res.render('home.html', {
                posts: posts,
                user: req.user
            });
        });
    });
};
