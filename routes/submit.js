
module.exports = function(app) {
    app.get('/submit', function(req, res) {
        res.render('submit.html', {
            nosidebar: true
        });
    });

    app.post('/submit', function(req, res) {
        var title = req.body.title,
            url = req.body.url;

        // insert http:// if the user failed to do so
        if (url.indexOf('://') === -1) {
            url = 'http://' + url;
        }

        req.models.Post.create([{
            author: req.user,
            title: title,
            url: url,
            date: new Date()
        }], function(err, items) {
            if (err) {
                console.log(err);
            }

            res.redirect('/');
        });
    });
};
