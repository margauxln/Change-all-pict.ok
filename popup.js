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

function reloadMainTab() {
    chrome.tabs.reload();
}

