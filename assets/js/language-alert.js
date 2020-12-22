const languages = [ "da-DK", "de-DE", "en-US", "es-ES", "fr-FR", "hu-HU", "ic-IC", "it-IT", "ja-JP", "ko-KR", "no-NO", "pl-PL", "pt-PT", "ru-RU", "sv-SE", "tr-TR", "uk-UA", "zh-CN", "zh-TW" ];
let languageID = document.documentElement.lang == "ic-IC" ? document.documentElement.lang : `${window.navigator.language.substr(0, 2)}-${window.navigator.language.substr(3, 3).toUpperCase()}`;
if(!languages.includes(languageID)) {
	languageID = languages.filter(r => r.includes(languageID))?.[0];
}


if(languageID) {
	top:
	for(let language of document.getElementById("language-dropdown").children) {
		if((language.children[0].dataset.languageId == languageID && !language.children[0].classList.contains("active")) || languageID == "ic-IC") {
			for(let languageAlert of document.getElementsByClassName("language-alert")) {
				languageAlert.classList.remove("d-none");
				let a = document.createElement("a");
				a.href = `${languageID == "en-US" ? "" : ("/" + languageID)}${window.location.pathname.replace(/[a-z][a-z]-[A-Z][A-Z]\//, "")}`;
				languageAlert.prepend(a);
	
				import(`./i18n/${languageID}.js`).then(obj => {
					a.innerHTML = obj.default.pageIsInYourLanguage;
				}).catch(() => a.innerHTML = "This page is available in your language!");
				break top;
			}
		}
	}
}
