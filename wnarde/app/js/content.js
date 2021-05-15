import {allLayers, allLayersMobile} from './banner/config.js'
import touch from './banner/touch.js'
import create from './banner/create.js'
import player from './player.js'

var content = {
	useFake: true,
	done: false,
	arrowInPost: false,
	includeHTML: function () {
		if (!this.done) {
			this.done = true
			const self = this
			var z, i, elmnt, file, xhttp;
			/* Loop through a collection of all HTML elements: */
			z = document.getElementsByTagName("*");
			for (i = 0; i < z.length; i++) {
				elmnt = z[i];
				/*search for elements with a certain atrribute:*/
				file = elmnt.getAttribute("includeHtml");
				if (file) {
					/* Make an HTTP request using the attribute value as the file name: */
					xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function () {
						if (this.readyState == 4) {
							if (this.status == 200) {elmnt.innerHTML = this.responseText;}
							if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
							/* Remove the attribute, and call this function once more: */
							elmnt.removeAttribute("include-html");
							self.includeHTML();
						}
					}
					xhttp.open("GET", file, true);
					xhttp.send();
					/* Exit the function: */
					return;
				}
			}
		}
	},

	showContent: function () {
		const self = this
		touch.isPost = true
		var banner = document.querySelector('.banner-content')
		const base = document.querySelector('.banner-base')
		var central = base.querySelector('.principal-banner')
		document.querySelector('body').style.overflowX = 'hidden'
		document.querySelector('body').style.maxWidth = '100%'
		document.querySelector('html').style.overflowX = 'hidden'
		document.querySelector('html').style.maxWidth = '100%'
		content.toggleArrows(true)
		if (central === null) {
			central = base.querySelector('.banner-central')
		}
		central = central.querySelector('img')
		banner.style.width = '100%'
		banner.style.height = '0'
		banner.style.position = 'relative'
		banner.style.zIndex = -1
		banner.style.top = '-110px'
		base.style.right = '1.4%'

		base.style.width = ''
		document.body.className = allLayers[base.dataset.pos].bg
		if (window.screen.width < 800) {
			base.style.right = '8.4%'
			banner.style.top = '-116px'
			document.body.className = allLayersMobile[base.dataset.pos].bg
		}

		document.querySelector('footer').style.display = 'none'
		var transiotion = setInterval(function () {
			clearInterval(transiotion)
			document.querySelector('.post-content').style.display = 'flex'
			if (document.getElementById('audio-player-container')) {
				player.init()
			}
		}, 30)

		if(content.useFake)
			content.includeHTML()
	},

	showBanners: function () {
		content.toggleArrows(false)
		document.querySelector('body').style.maxWidth = 'none'
		document.querySelector('html').style.maxWidth = 'none'
		this.done = false
		var hasBase = document.querySelector('.banner-base')
		if (hasBase === null) {
			create.init()
		}
		var banner = document.querySelector('.banner-content').style
		var post = document.querySelector('.post-content').style
		const base = document.querySelector('.banner-base')
		banner.width = '200%'
		banner.zIndex = 1
		banner.position = 'fixed'
		banner.height = '100%'
		banner.top = '0'
		base.style.right = '0'
		base.style.width = '50%'
		var transiotion = setInterval(function () {
			if (post.opacity === '') {
				post.opacity = 1
			}
			if (post.opacity >= 0.1) {
				post.opacity = `${parseFloat(post.opacity) - 0.1}`
				return
			}
			touch.isPost = false
			clearInterval(transiotion)
			document.body.className = allLayers[document.querySelector('.banner-base').dataset.pos].bg
			document.body.className += ` banner${document.querySelector('.banner-base').dataset.pos}`
			document.querySelector('footer').style.display = 'block'
			document.querySelector('.banner-content').style.display = 'flex'
			document.querySelector('.banner-content').style.opacity = 1
			document.querySelector('.post-content').style.display = 'none'
			document.querySelector('.post-content').style.opacity = 1
		}, 30)
	},

	showFullPageContent: function (bgClass) {
		document.querySelector('body').className = bgClass
		document.querySelector('.banner-content').style.height = 0
		content.toggleArrows(true)
		if (document.querySelector('.banner-base')) {
			document.querySelector('.banner-base').remove()
		}
		document.querySelector('body').style.overflowX = 'hidden'
		document.querySelector('body').style.maxWidth = '100%'
		document.querySelector('html').style.overflowX = 'hidden'
		document.querySelector('html').style.maxWidth = '100%'
		document.querySelector('footer').style.display = 'none'
		var transiotion = setInterval(function () {
			clearInterval(transiotion)
			document.querySelector('.post-content').style.display = 'flex'
		}, 30)
		content.includeHTML()
	},

	toggleArrows: function (isPost) {
		var lArrow = document.querySelector('.tleft')
		var rArrow = document.querySelector('.tright')
		var goBackM = document.querySelector('.go-back-mb')
		var goBack = document.querySelector('.go-back')
		var showBackNav = document.querySelector('.show-back')
		if (isPost) {
			showBackNav.style.display = 'none'
			if (window.screen.availWidth > 868) {
				lArrow.style.opacity = 0
				rArrow.style.opacity = 0
				goBack.style.display = 'block'
				goBack.addEventListener('click', function () {
					content.showBanners()
				})
				lArrow.style.top = '64%'
				rArrow.style.top = '64%'
				content.showPostArrow(isPost)
			} else {
				goBackM.style.display = 'block'
				goBackM.addEventListener('click', function () {
					content.showBanners()
				})
			}
			return
		}
		showBackNav.style.display = 'block'
		if (window.screen.availWidth > 868) {
			lArrow.style.top = '15%'
			rArrow.style.top = '15%'
			lArrow.style.opacity = 1
			rArrow.style.opacity = 1
			goBack.style.display = 'none'
		}
		else {
			goBackM.style.display = 'none'
		}
	},

	showPostArrow: function () {
		window.addEventListener("scroll", (event) => {
			if (!content.arrowInPost)
				return

			var lArrow = document.querySelector('.tleft')
			var rArrow = document.querySelector('.tright')
			if (content.inView(document.querySelector('.footer-post'))) {
				lArrow.style.opacity = 1
				rArrow.style.opacity = 1
			} else {
				lArrow.style.opacity = 0
				rArrow.style.opacity = 0
			}
		});
	},

	inView: function (el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
}
export default content
