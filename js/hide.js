chrome.storage.sync.get("whitelistedForumIds", function (result) {
    var whitelistedForumIds = result["whitelistedForumIds"];
    if (whitelistedForumIds !== undefined && whitelistedForumIds.trim() !== "") {
        hideDiscussions(whitelistedForumIds.trim().split(/ +/));
    } else {
        showDiscussions();
    }
});

function showDiscussions() {
    var discussionItems = document.getElementsByClassName("discussionListItems")[0].children;
    for (let discussionItem of discussionItems) {
        discussionItem.style.display = "table";
    }
}

function hideDiscussions(whitelistedForumIds) {
    var whitelistedForumHrefs = [];
    for (let id of whitelistedForumIds) {
        whitelistedForumHrefs.push(`https://www.fer2.net/index.php?forums/${id}/`);
    }

    var discussionItems = document.getElementsByClassName("discussionListItems")[0].children;
    for (let discussionItem of discussionItems) {
        var href = discussionItem.getElementsByClassName("forumLink")[0].href;
        if (whitelistedForumHrefs.indexOf(href) == -1) {
            discussionItem.style.display = "none";
        }
    }
}