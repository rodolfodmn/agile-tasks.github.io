window.onload = function () {
	var show;
	document.querySelector('.icon-close').
		addEventListener('click', function (event) {
			document.querySelector(".back-nav").style.display = "none"
			document.querySelector(".back-nav").style.opacity = 0;
		})

	document.querySelector('.icon-recent_b').
		addEventListener('click', function (event) {
			document.querySelector(".back-nav").style.display = "flex"
			show = setInterval(opacityUp, 20)
		})

	function opacityUp() {
		var backNav = document.querySelector(".back-nav")
		if (backNav.style.opacity === '') {
			backNav.style.opacity = 0;
		}
		backNav.style.opacity = parseFloat(backNav.style.opacity) + 0.1
		if (backNav.style.opacity >= 0.9) {
			clearInterval(show)
		}
	}
} 
