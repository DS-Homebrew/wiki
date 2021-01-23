function openTab(event, target) {
	for(let element of target.parentNode.parentNode.children) {
		if (element.id.includes("tab")) {
			element.style.display = "none";
		}
	}

	for(let element of target.parentNode.children) {
		element.classList.remove("btn-secondary");
		element.classList.add("btn-outline-secondary");
	}
	
	document.getElementById(`tab-${target.dataset.tabName}`).style.display = "block";
	target.classList.remove("btn-outline-secondary");
	target.classList.add("btn-secondary");

	if(event) {
		let url = new URL(window.location);
		url.searchParams.set("tab", target.dataset.tabName);
		history.pushState({}, "", url);
	}
}

// Remove links from tab buttons
for(a of document.getElementsByClassName("tab-link")) {
	a.href = "javascript:void(0);";
}

// Open the tabs for the current OS or the default
for(let tabGroup of document.getElementsByClassName("tab-container")) {
	let tab = new URL(window.location).searchParams.get("tab");
	if(tab) {
		openTab(null, Array.from(tabGroup.children[0].children).filter(r => r.dataset.tabName ==tab)[0]);
		break;
	}

	for(let tab of tabGroup.children[0].children) {
		if(tabGroup.classList.contains("tab-os")) {
			if(navigator.platform.includes("Win")) {
				if(tab.classList.contains("tab-windows")) {
					openTab(null, tab);
					break;
				} else if(tab.classList.contains("other")) {
					openTab(null, tab);
				}
			} else if(navigator.platform.includes("Mac")) {
				if(tab.classList.contains("tab-macos")) {
					openTab(null, tab);
					break;
				} else if(tab.classList.contains("other")) {
					openTab(null, tab);
				}
			} else {
				if(tab.classList.contains("tab-other")) {
					openTab(null, tab);
					break;
				}
			}
		} else if(tab.classList.contains("tab-default")) {
			openTab(null, tab);
			break;
		}
	}
}
