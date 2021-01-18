document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btTxtSubmit")) {
        var chosenCat = e.target.src;
        console.log(chosenCat);
        chrome.storage.sync.set({"monImage": chosenCat}, function(){
        console.log('Value is set to ' + chosenCat);
        reloadMainTab();
         });
    }
})

chrome.storage.sync.get(['monImage'], function(result) {
    console.log('Value currently is ' + result);
});

function reloadMainTab() {
    chrome.tabs.reload();
}

