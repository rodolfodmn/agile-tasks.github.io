import {allLayers, allLayersMobile} from './banner/config.js'
var content = {
	done: false,

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
		var banner = document.querySelector('.banner-content')
		const base = document.querySelector('.banner-base')
		banner.style.width = '100%'
		banner.style.position = 'relative'
		banner.style.height = '800px'
		banner.style.top = '-119px'
		base.style.width = ''
		document.body.className = allLayers[base.dataset.pos].bg
		if (window.screen.width < 800) {
			document.body.className = allLayersMobile[base.dataset.pos].bg
		}

		document.querySelector('footer').style.display = 'none'
		var transiotion = setInterval(function () {
			clearInterval(transiotion)
			document.querySelector('.tleft').style.display = 'none'
			document.querySelector('.tright').style.display = 'none'
			document.querySelector('.post-content').style.display = 'flex'
			document.querySelector('.show-back').style.display = 'none'
			if (window.screen.availWidth > 800) {
				document.querySelector('.go-back').style.display = 'block'
				document.querySelector('.go-back').addEventListener('click', function () {
					self.showBanners()
				})
			} else {
				document.querySelector('.go-back-mb').style.display = 'block'
				document.querySelector('.go-back-mb').addEventListener('click', function () {
					self.showBanners()
				})
			}
		}, 30)

		content.includeHTML()
	},

	showBanners: function () {
		this.done = false
		var banner = document.querySelector('.banner-content').style
		var post = document.querySelector('.post-content').style
		const base = document.querySelector('.banner-base')
		banner.width = '200%'
		banner.position = 'fixed'
		banner.height = '100%'
		banner.top = '0'
		base.style.width = '50%'
		console.log(allLayers[base.dataset.pos].bg)
		var transiotion = setInterval(function () {
			if (post.opacity === '') {
				post.opacity = 1
			}
			if (post.opacity >= 0) {
				post.opacity = `${parseFloat(post.opacity) - 0.1}`
				return
			}
			clearInterval(transiotion)
			document.body.className = `banner${document.querySelector('.banner-base').dataset.pos}`
			if (window.screen.availWidth > 800) {
				document.querySelector('.tleft').style.display = 'flex'
				document.querySelector('.tright').style.display = 'flex'
			}
			document.querySelector('footer').style.display = 'block'
			document.querySelector('.banner-content').style.display = 'flex'
			document.querySelector('.banner-content').style.opacity = 1
			document.querySelector('.post-content').style.display = 'none'
			document.querySelector('.post-content').style.opacity = 1
			document.querySelector('.show-back').style.display = 'block'
			if (window.screen.availWidth > 768) {
				document.querySelector('.go-back').style.display = 'none'
			} else {
				document.querySelector('.go-back-mb').style.display = 'none'
			}
		}, 30)
	}
}
export default content
