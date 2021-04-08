var navBar = {
	show: '',
	alpha: 0,
	backNav: document.querySelector(".back-nav"),

	init: function () {
		document.querySelector('.icon-close').
			addEventListener('click', function (event) {
				navBar.alpha = 0
				document.querySelector(".back-nav").style.display = "none"
			})

		document.querySelector('.icon-recent_b').
			addEventListener('click', function (event) {
				document.querySelector(".back-nav").style.display = "flex"
				navBar.show = setInterval(navBar.opacityUp, 25)
			})

	},

	opacityUp: function () {
		navBar.alpha += 0.05
		document.querySelector('#logo').style.background = '#fff'
		var bgColor = `rgba(29, 38, 45, ${navBar.alpha})`
		if (document.querySelector(".icon-day").style.display === 'none') {
			bgColor = `rgba(255, 255, 255, ${navBar.alpha})`
		}
		navBar.backNav.style.background = bgColor
		if (navBar.alpha > 0.9) {
			if (window.screen.width < 800) {
				bgColor = `rgba(29, 38, 45, 0.95)`
			}
			if (document.querySelector(".icon-day").style.display === 'none') {
				bgColor = `rgba(255, 255, 255, 1)`
			}
			navBar.backNav.style.background = bgColor
			clearInterval(navBar.show)
		}
	}
}
export default navBar
