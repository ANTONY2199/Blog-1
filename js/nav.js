var active = false
function navEffect() {
	if (!active) {
		active = true
		document.getElementById('nav-mobile').style.display = "block"
	} else {
		document.getElementById('nav-mobile').style.display = "none"
		active = false
	}
}