window.listener = {
    /**
     * Listen page load
     */
    init: function () {
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete') {
                this.matchConfiguration(tab.url, () => {
                    this.runContentScript(tabId);
                })
            }
        });
    },

    /**
     * Match URL against whitelist / blacklist
     * @param {string} url
     * @param {function} callback
     */
    matchConfiguration: function (url, callback) {
        if (this.matchProbability()) {
            callback();
        }
    },

    /**
     * Randomly select pages where to run the script
     * @returns {boolean}
     */
    matchProbability: function () {
        return Math.random() * 100 < defaults.pageProbability;
    },

    /**
     * Inject content script into tab
     * @param {number} tabId
     */
    runContentScript: function (tabId) {
        chrome.tabs.executeScript(tabId, {
            file: "scripts/content-script.js"
        });
    }
};

/**
 * Initialization
 */
listener.init();
