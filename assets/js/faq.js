function setFaq(faq) {
	const otherFaqs = document.querySelectorAll("#faq-container > .accordian-item:not(#faq-" + faq + ")");
	for(i = 0; i < otherFaqs.length; i++) {
		otherFaqs[i].open = false;
	}

	var url = window.location.href;
	if(document.getElementById("faq-" + faq).open) { // Remove FAQ param from URL if was open
		url = url.replace(/([?&])faq=.*?(\&|#|$)/, function(m, m1, m2) { return (m1 == "?" && m2 == "&") ? "?" : ""; });
	} else if(url.match(/[?&]faq=/)) { // Already has a FAQ param
		url = url.replace(/([?&]faq=)(.*?)(?=\&|#|$)/, "$1" + faq);
	} else if(url.match(/\?/)) { // Already has other search params
		url = url.replace(/[?&].*?(?=#|$)/, "$&&faq=" + faq);
	} else { // No search params
		url = url.replace(/(?=#|$)/, "?faq=" + faq);
	}

	if(url != window.location.href) // Don't update if not changed
		history.pushState({}, "", encodeURI(url));
}

// Try get FAQ from URL
const urlFaq = decodeURI(window.location.href).match(/[?&]faq=(.*?)(?=\&|#|$)/);
if(urlFaq && urlFaq.length > 1) {
	const faqs = document.getElementById("faq-container").children;
	for(i = 0; i < faqs.length; i++) {
		const faq = faqs[i];
		if(faq.id == "faq-" + urlFaq[1]) {
			faq.open = true;
			faq.scrollIntoView();
			break;
		}
	}
}
