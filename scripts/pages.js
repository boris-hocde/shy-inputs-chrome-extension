/**
 * Extension pages links listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Stop moving inputs
     */
    const openElement = document.getElementById('shyinputs-stop-link');
    if (openElement) {
        openElement.addEventListener("click", () => {
            // TODO: stop moving
            window.close();
        }, false);
    }
    
    /**
     * Open configuration page
     */
    const configureElement = document.getElementById('shyinputs-configure-link');
    if (configureElement) {
        configureElement.addEventListener("click", () => {
            chrome.runtime.openOptionsPage();
        }, false);
    }
});
