chrome.storage.sync.get("whitelistedForumIds", function (result) {
    var whitelistedForumIds = result["whitelistedForumIds"];
    if (whitelistedForumIds !== undefined && whitelistedForumIds.trim() !== "") {
        removeDiscussions(whitelistedForumIds.trim().split(/ +/));
    }
});

function removeDiscussions(whitelistedForumIds) {
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