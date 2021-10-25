---
---

// Have liquid insert the language info
const languages = [{% for collection in site.collections %}"{{ collection.label }}"{% unless forloop.last %}, {% endunless %}{% endfor %}];
const rtl = [{% for lang in site.data.rtl %}"{{ lang }}"{% unless forloop.last %}, {% endunless %}{% endfor %}];

let languageID = null;

function updateLanguageAlert() {
	if(languageID)
		document.getElementById("language-alert-link").href = (languageID == "en-US" ? "" : ("/" + languageID)) + window.location.pathname.replace(/[a-z]{2}-[A-Z]{2}\//, "") + (window.location.search ?? "") + (window.location.hash ?? "");
}

if(!sessionStorage.languageAlertDismissed) {
	// Find which language the popup should be for, if any
	// Crowdin In-Context, keep as is
	if(document.documentElement.lang == "ic-IC") {
		languageID = "ic-IC";
	// If the current language isn't in the browser's allowed languages, show the popup for the first language that has a page
	} else if(!window.navigator.languages.find(lang => document.documentElement.lang.toLowerCase().includes(lang.toLowerCase()))) {
		for(let windowLang of window.navigator.languages) {
			let lang = languages.find(lang => lang.substr(0, 2) == windowLang.substr(0, 2));
			if(lang) {
				languageID = lang.substr(0, 2) + "-" + lang.substr(3, 3).toUpperCase();
				break;
			}
		}
	}

	// If a language was found, show the popup
	if(languageID) {
		for(let language of document.getElementById("language-dropdown").children) {
			if(language.children[0].lang == languageID) {
				// Unhide language alert and set text direction
				const languageAlert = document.getElementById("language-alert");
				languageAlert.classList.remove("d-none");
				languageAlert.dir = rtl.includes(languageID) ? "rtl" : "ltr";

				// Set lang of the element so the correct forms of characters are used (mainly for Chinese characters)
				languageAlert.lang = languageID;

				// Save dismissal to session storage on close
				languageAlert.addEventListener("closed.bs.alert", () => {
					if(sessionStorage)
						sessionStorage.languageAlertDismissed = true;
				});

				const langAlertLink = document.getElementById("language-alert-link");

				// Set text from language file if it exists
				import(`./i18n/${languageID}.js`).then(obj => {
					langAlertLink.innerHTML = obj.default.pageIsInYourLanguage;
				}).catch(() => langAlertLink.innerHTML = "This page is available in your language!");

				updateLanguageAlert();
				break;
			}
		}
	}
}

window.addEventListener("hashchange", updateLanguageAlert);
