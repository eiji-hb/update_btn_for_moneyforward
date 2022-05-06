const url = "https://moneyforward.com/accounts"

chrome.action.onClicked.addListener(async () => {
    // 新しいタブ作成
    const res = await chrome.tabs.create({ url })
});