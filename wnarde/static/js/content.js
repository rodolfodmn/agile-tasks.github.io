var content = {
	includeHTML: function () {
		const self = this
		var z, i, elmnt, file, xhttp;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
			elmnt = z[i];
			/*search for elements with a certain atrribute:*/
			file = elmnt.getAttribute("include-html");
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

	},

	showContent: function () {
		const self = this
		var banner = document.querySelector('.banner-content').style
		var transiotion = setInterval(function () {
			if (banner.opacity === '') {
				banner.opacity = 1
			}
			if (banner.opacity >= 0) {
				banner.opacity = `${parseFloat(banner.opacity) - 0.1}`
				return
			}
			clearInterval(transiotion)
			document.querySelector('.banner-content').style.display = 'none'
			document.querySelector('.post-content').style.display = 'flex'
			document.querySelector('.show-back').style.display = 'none'
			document.querySelector('.go-back').style.display = 'block'
			document.querySelector('.go-back').addEventListener('click', function () {
				self.showBanners()
			})
		}, 30)

		this.includeHTML()
	},

	showBanners: function () {
		const self = this
		var banner = document.querySelector('.post-content').style
		var transiotion = setInterval(function () {
			if (banner.opacity === '') {
				banner.opacity = 1
			}
			if (banner.opacity >= 0) {
				banner.opacity = `${parseFloat(banner.opacity) - 0.1}`
				return
			}
			clearInterval(transiotion)
			document.querySelector('.banner-content').style.display = 'flex'
			document.querySelector('.banner-content').style.opacity = 1
			document.querySelector('.post-content').style.display = 'none'
			document.querySelector('.post-content').style.opacity = 1
			document.querySelector('.show-back').style.display = 'block'
			document.querySelector('.go-back').style.display = 'none'
		}, 30)
	}
}
export default content
