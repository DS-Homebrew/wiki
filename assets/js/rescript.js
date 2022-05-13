{...{}}; // Syntax error in anything before ECMAScript 9, we don't want to run this code on old browsers

// Make navbar not open on hover
Array.from(document.getElementsByClassName("hover-content")).forEach(r => {
	r.classList.remove("hover-content");
});
