chrome.webRequest.onBeforeRequest.addListener(function (details) {
	var redirectUrl = "https://proxy.duckduckgo.com/iu/?u=" + details.url;
	redirectUrl = details.url.replace("imgur.com", "0imgur.com");
	if (redirectUrl.includes("stack.")) {
		redirectUrl = redirectUrl.replace("stack.", "");
	}
	return {redirectUrl: redirectUrl};
}, {
    urls: ["*://*.imgur.com/*"]
}, ["blocking"]);
