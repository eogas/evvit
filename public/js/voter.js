
var voteup = function(link) {
    var container = link.parentElement,
        upvote = link.children[0],
        downvote = container.children[1].children[0],
        voteValue = 0;

    if (upvote.classList.contains('vote-up')) {
        upvote.classList.remove('vote-up');
        voteValue = 0;
    } else {
        upvote.classList.add('vote-up');
        downvote.classList.remove('vote-down');
        voteValue = 1;
    }

    // TODO: hit the server with voteValue
};

var votedown = function(link) {
    var container = link.parentElement,
        upvote = container.children[0].children[0],
        downvote = link.children[0],
        voteValue = 0;

    if (downvote.classList.contains('vote-down')) {
        downvote.classList.remove('vote-down');
        voteValue = 0;
    } else {
        downvote.classList.add('vote-down');
        upvote.classList.remove('vote-up');
        voteValue = -1;
    }

    // TODO: hit the server with voteValue
};
