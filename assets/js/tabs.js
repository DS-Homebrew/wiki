function openTab(event, tabName) {
	for(let element of event.currentTarget.parentNode.parentNode.children) {
		if (element.id.includes("tab")) {
			element.style.display = "none";
		}
	}

	for(let element of event.currentTarget.parentNode.children) {
		element.classList.remove("btn-secondary");
		element.classList.add("btn-outline-secondary");
	}
	
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.classList.remove("btn-outline-secondary");
	event.currentTarget.classList.add("btn-secondary");
}

// Remove links from tab buttons
for(a of document.getElementsByClassName("tab-link")) {
	a.href = "javascript:void(0);";
}

// Open the tabs for the current OS or the default
for(let tabGroup of document.getElementsByClassName("tab-container")) {
	for(let tab of tabGroup.children[0].children) {
		if(tabGroup.classList.contains("tab-os")) {
			if(navigator.platform.includes("Win")) {
				if(tab.classList.contains("tab-windows")) {
					tab.click();
					break;
				} else if(tab.classList.contains("other")) {
					tab.click();
				}
			} else if(navigator.platform.includes("Mac")) {
				if(tab.classList.contains("tab-macos")) {
					tab.click();
					break;
				} else if(tab.classList.contains("other")) {
					tab.click();
				}
			} else {
				if(tab.classList.contains("tab-other")) {
					tab.click();
					break;
				}
			}
		} else if(tab.classList.contains("tab-default")) {
			tab.click();
			break;
		}
	}
}
