const url = "https://moneyforward.com/accounts"

chrome.action.onClicked.addListener(async () => {
    // new tabs
    const res = await chrome.tabs.create({ url })
});