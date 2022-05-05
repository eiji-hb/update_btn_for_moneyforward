function reddenPage() {
    document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
    console.log("@@", tab)
    if (tab.url.includes("https://moneyforward")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: reddenPage
        });
    }
});
