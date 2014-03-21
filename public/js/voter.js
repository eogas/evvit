
var voteup = function(link, postId) {
    var container = link.parentElement,
        upvote = link.children[0],
        downvote = container.children[1].children[0],
        xhr = new XMLHttpRequest();

    if (upvote.classList.contains('vote-up')) {
        upvote.classList.remove('vote-up');
        xhr.open('POST', '/vote/' + postId + '/none');
    } else {
        upvote.classList.add('vote-up');
        downvote.classList.remove('vote-down');
        xhr.open('POST', '/vote/' + postId + '/up');
    }

    xhr.send();
};

var votedown = function(link, postId) {
    var container = link.parentElement,
        upvote = container.children[0].children[0],
        downvote = link.children[0],
        xhr = new XMLHttpRequest();

    if (downvote.classList.contains('vote-down')) {
        downvote.classList.remove('vote-down');
        xhr.open('POST', '/vote/' + postId + '/none');
    } else {
        downvote.classList.add('vote-down');
        upvote.classList.remove('vote-up');
        xhr.open('POST', '/vote/' + postId + '/down');
    }

    xhr.send();
};
