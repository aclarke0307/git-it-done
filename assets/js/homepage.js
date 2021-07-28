var getUserrepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};
getUserrepos();