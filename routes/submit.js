
module.exports = function(app) {
    app.get('/submit', function(req, res) {
        res.render('submit.html', {
            nosidebar: true
        });
    });

    app.post('/submit', function(req, res) {
        var title = req.body.title || '',
            url = req.body.url || '';

        title = title.trim();
        url = url.trim();

        if (!title || !url) {
            // TODO: error flash
            res.redirect('/submit');
            return;
        }

        // insert http:// if the user failed to do so
        if (url.indexOf('://') === -1) {
            url = 'http://' + url;
        }

        req.models.Post.create([{
            author: req.user,
            title: title,
            url: url,
            date: new Date()
        }], function(err, posts) {
            if (err) {
                console.log(err);
                return;
            }

            // give the post an automatic upvote from the submitter
            req.models.Vote.create([{
                voter: req.user,
                post: posts[0],
                value: 1
            }], function(err, votes) {
                res.redirect('/');
            });
        });
    });
};
