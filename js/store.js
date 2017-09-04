function save() {
    chrome.storage.sync.set({"whitelistedForumIds": document.getElementById("forumIdsInput").value}, null);
    chrome.tabs.executeScript(null, {file: "js/hide.js"});
}

document.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById("saveButton").addEventListener("click", save);
    
    var forumIdsInput = document.getElementById("forumIdsInput");
    chrome.storage.sync.get("whitelistedForumIds", function (result) {
        var whitelistedForumIds = result["whitelistedForumIds"];
        if (whitelistedForumIds === undefined) {
            forumIdsInput.value = "";
        } else {
            forumIdsInput.value = whitelistedForumIds;
        }
    });
});
