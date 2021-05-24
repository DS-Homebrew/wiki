---
---

if(!sessionStorage.languageAlertDismissed) {
	// Have liquid insert the language info
	const languages = [{% for collection in site.collections %}"{{ collection.label }}"{% unless forloop.last %}, {% endunless %}{% endfor %}];
	const rtl = [{% for lang in site.data.rtl %}"{{ lang }}"{% unless forloop.last %}, {% endunless %}{% endfor %}];

	// Find which language the popup should be for, if any
	let languageID = null;
	// Crowdin In-Context, keep as is
	if(document.documentElement.lang == "ic-IC"){
		languageID = "ic-IC";
	// If the current language isn't in the browser's allowed languages, show the popup for the first language that has a page
	} else if(!window.navigator.languages.find(r => document.documentElement.lang.toLowerCase().includes(r.toLowerCase()))) {
		for(let wl of window.navigator.languages) {
			let l = languages.find(r => r.substr(0, 2) == wl.substr(0, 2));
			if(l) {
				languageID = `${l.substr(0, 2)}-${l.substr(3, 3).toUpperCase()}`;
				break;
			}
		}
	}

	// If a language was found, show the popup
	if(languageID) {
		for(let language of document.getElementById("language-dropdown").children) {
			if(language.children[0].dataset.languageId == languageID) {
				// Unhide language alert and set text direction
				let languageAlert = document.getElementById("language-alert");
				languageAlert.classList.remove("d-none");
				languageAlert.dir = rtl.includes(languageID) ? "rtl" : "ltr";

				// Create link to make in the preferred language
				let a = document.createElement("a");
				a.href = `${languageID == "en-US" ? "" : ("/" + languageID)}${window.location.pathname.replace(/[a-z][a-z]-[A-Z][A-Z]\//, "")}`;
				languageAlert.prepend(a);

				// Set text from language file if it exists
				import(`./i18n/${languageID}.js`).then(obj => {
					a.innerHTML = obj.default.pageIsInYourLanguage;
				}).catch(() => a.innerHTML = "This page is available in your language!");

				// Set lang of the element so the correct forms of characters are used (mainly for Chinese characters)
				languageAlert.lang = languageID;

				// Save dismissal to session storage on close
				languageAlert.addEventListener("closed.bs.alert", () => {
					if(sessionStorage)
						sessionStorage.languageAlertDismissed = true;
				});
				break;
			}
		}
	}
}
