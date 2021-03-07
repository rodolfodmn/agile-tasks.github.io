function initNav() {
	var show;
	var alpha = 0
	var backNav = document.querySelector(".back-nav")
	document.querySelector('.icon-close').
		addEventListener('click', function (event) {
			alpha = 0
			document.querySelector(".back-nav").style.display = "none"
		})

	document.querySelector('.icon-recent_b').
		addEventListener('click', function (event) {
			document.querySelector(".back-nav").style.display = "flex"
			show = setInterval(opacityUp, 25)
		})

	function opacityUp() {
		alpha += 0.05
		backNav.style.background = `rgba(49, 57, 63, ${alpha})`
		if (alpha > 0.9) {
			backNav.style.background = `rgba(49, 57, 63, 0.85)`
			clearInterval(show)
		}
	}

}
