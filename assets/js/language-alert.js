const languages = ["da-DK", "de-DE", "en-US", "es-ES", "fr-FR", "hu-HU", "he-IL", "ic-IC", "it-IT", "ja-JP", "ko-KR", "no-NO", "pl-PL", "pt-PT", "ru-RU", "sv-SE", "tr-TR", "uk-UA", "zh-CN", "zh-TW"];
const rtl = ["he-IL"];
let languageID = document.documentElement.lang == "ic-IC" ? document.documentElement.lang : `${window.navigator.language.substr(0, 2)}-${window.navigator.language.substr(3, 3).toUpperCase()}`;
if(!languages.includes(languageID)) {
	languageID = languages.filter(r => r.includes(languageID))?.[0];
}


if(languageID) {
	for(let language of document.getElementById("language-dropdown").children) {
		if((language.children[0].dataset.languageId == languageID && !language.children[0].classList.contains("active")) || languageID == "ic-IC") {
			let languageAlert = document.getElementById("language-alert");
			languageAlert.classList.remove("d-none");
			languageAlert.classList.add(rtl.includes(languageID) ? "direction-rtl" : "direction-ltr");
			let a = document.createElement("a");
			a.href = `${languageID == "en-US" ? "" : ("/" + languageID)}${window.location.pathname.replace(/[a-z][a-z]-[A-Z][A-Z]\//, "")}`;
			languageAlert.prepend(a);

			import(`./i18n/${languageID}.js`).then(obj => {
				a.innerHTML = obj.default.pageIsInYourLanguage;
			}).catch(() => a.innerHTML = "This page is available in your language!");
			break;
		}
	}
}
