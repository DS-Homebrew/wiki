const platforms = {
	"Win32": "tab-windows",
	"MacIntel": "tab-macos"
};

function setTab(tab) {
	let url = new URL(window.location);
	url.searchParams.set("tab", tab);
	history.pushState({}, "", url);
}

// Open the tabs for the current OS or the one in the URL
for(let tabGroup of document.getElementsByClassName("tab-container")) {
	let tab = null;

	// Try get tab from URL
	let urlTab = new URL(window.location).searchParams.get("tab");
	if(urlTab)
		tab = Array.from(tabGroup.children).filter(r => r.id == `tab-${urlTab}`)[0];

	// Try get tab for OS
	if(!tab)
		tab = Array.from(tabGroup.children).filter(r => r.id == platforms[navigator.platform])[0];

	// Fall back to "other" tab
	if(!tab)
		tab = Array.from(tabGroup.children).filter(r => r.id == "tab-other")[0];

	// If a tab was found, open it
	if(tab)
		tab.click();
}
