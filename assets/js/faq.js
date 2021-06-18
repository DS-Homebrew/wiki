function setFaq(tab) {
	let url = new URL(window.location);
	url.searchParams.set("faq", tab);
	history.pushState({}, "", url);
}

// Try get FAQ from URL
let urlFaq = new URL(window.location).searchParams.get("faq");
if(urlFaq) {
	faq = Array.from(document.getElementById("faq-container").children).filter(r => r.children[0].id == `faq-${urlFaq}`)[0];
	if(faq) {
		faq.children[0].click();
		faq.children[2].scrollIntoView();
	}
}
