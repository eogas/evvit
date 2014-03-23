
var adjustPostScore = function(elem, adjust) {
    var scoreElem = elem.getElementsByClassName('post-score')[0];

    scoreElem.innerHTML = parseInt(scoreElem.innerHTML) + adjust;
};

var voteup = function(link, postId) {
    var container = link.parentElement,
        upvote = link.children[0],
        downvote = container.getElementsByClassName('vote')[1].firstElementChild,
        xhr = new XMLHttpRequest();

    if (upvote.classList.contains('vote-up')) {
        upvote.classList.remove('vote-up');
        adjustPostScore(container, -1);

        xhr.open('POST', '/vote/' + postId + '/none');
    } else {
        upvote.classList.add('vote-up');

        if (downvote.classList.contains('vote-down')) {
            downvote.classList.remove('vote-down');
            adjustPostScore(container, 2);
        } else {
            adjustPostScore(container, 1);
        }

        xhr.open('POST', '/vote/' + postId + '/up');
    }

    xhr.send();
};

var votedown = function(link, postId) {
    var container = link.parentElement,
        upvote = container.getElementsByClassName('vote')[0].firstElementChild,
        downvote = link.children[0],
        xhr = new XMLHttpRequest();

    if (downvote.classList.contains('vote-down')) {
        downvote.classList.remove('vote-down');
        adjustPostScore(container, 1);

        xhr.open('POST', '/vote/' + postId + '/none');
    } else {
        downvote.classList.add('vote-down');

        if (upvote.classList.contains('vote-up')) {
            upvote.classList.remove('vote-up');
            adjustPostScore(container, -2);
        } else {
            adjustPostScore(container, -1);
        }

        xhr.open('POST', '/vote/' + postId + '/down');
    }

    xhr.send();
};
