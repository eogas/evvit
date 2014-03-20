
var showReply = function(id) {
    var replyLink = document.getElementById('comment-' + id + '-reply-link'),
        replyForm = document.getElementById('comment-' + id + '-reply-form');

    replyForm.classList.remove('hidden-reply');
    replyLink.classList.add('hidden-reply');
};

var hideReply = function(id) {
    var replyLink = document.getElementById('comment-' + id + '-reply-link'),
        replyForm = document.getElementById('comment-' + id + '-reply-form');

    replyForm.classList.add('hidden-reply');
    replyLink.classList.remove('hidden-reply');
};
