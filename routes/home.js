
module.exports = function(app) {
    app.get('/', function(req, res) {
        req.models.Post.find({}, ['date', 'Z'], function(err, posts) {
            if (err) {
                console.log(err);
                return;
            }

            res.render('home.html', {
                posts: posts,
                user: req.user
            });
        });
    });
};
