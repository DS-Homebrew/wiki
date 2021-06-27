const platforms = {
	"Win32": "windows",
	"MacIntel": "macos",
	"MacPPC": "macos"
};

function setTab(tab) {
	var url = window.location.href;
	if(url.match(/[?&]tab=/)) { // Already has a tab param
		url = url.replace(/([?&]tab=)(.*?)(?=\&|#|$)/, "$1" + tab)
	} else if(url.match(/\?/)) { // Already has other search params
		url = url.replace(/[?&].*?(?=#|$)/, "$&&tab=" + tab);
	} else { // No search params
		url = url.replace(/(?=#|$)/, "?tab=" + tab);
	}

	if(url != window.location.href) // Don't update if not changed
		history.pushState({}, "", encodeURI(url));
}

function findTab(tabGroup, tabName) {
	for(j = 0; j < tabGroup.children.length; j++) {
		if(tabGroup.children[j].id == "tab-" + tabName) {
			return tabGroup.children[j];
		}
	}
}

// Open the tabs for the current OS or the one in the URL
const tabContainers = document.getElementsByClassName("tab-container");
for(i = 0; i < tabContainers.length; i++) {
	const tabGroup = tabContainers[i];

	var tab = null;

	// Try get tab from URL
	const urlTab = decodeURI(window.location.href).match(/[?&]tab=(.*?)(?=\&|#|$)/);
	if(urlTab && urlTab.length > 1)
		tab = findTab(tabGroup, urlTab[1]);

	// Try get tab for OS
	if(!tab)
		tab = findTab(tabGroup, platforms[navigator.platform]);

	// Fall back to "other" tab
	if(!tab)
		tab = findTab(tabGroup, "other");

	// If a tab was found, open it
	if(tab)
		tab.click();
}
