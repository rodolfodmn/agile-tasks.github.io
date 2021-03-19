import {imgs} from './banner-config.js'
import content from './content.js'
import textBanner from './textBanner.js'
import moveBanners from './moveBanners.js'

const banners = {

	widthC: 100 / imgs.length,
	widthP: 100 * imgs.length,
	canChange: true,
	done: {
		banner: true,
		change: true,
		move: true
	},
	curentBanner: 0,
	nextBanner: 1,

	setupBanners: function () {
		this.craeteBanners()
		this.setEvents()
	},

	setEvents: function () {
		const self = this
		document.querySelector(".tleft").addEventListener("click", function () {
			if (self.curentBanner > 0) {
				if (banners.canChange) {
					banners.canChange = false
					self.nextBanner = self.curentBanner - 1
					self.changeBgBody(self.nextBanner)
					moveBanners.move(self.curentBanner, true)
					textBanner.change(self.nextBanner, true)
					textBanner.moveText(self.nextBanner, true)
					var checkIsDone = setInterval(function () {
						if (banners.canGoNext()) {
							clearInterval(checkIsDone)
							setTimeout(function () {
								banners.curentBanner = banners.nextBanner
							}, 50)
						}
					}, 20)
				}
			}
		})

		document.querySelector(".tright").addEventListener("click", function () {
			if (self.curentBanner < imgs.length - 1) {
				if (banners.canChange) {
					banners.canChange = false
					self.nextBanner = self.curentBanner + 1
					self.curentBannerW = 0
					self.changeBgBody(self.nextBanner)
					moveBanners.move(self.nextBanner)
					textBanner.change(self.nextBanner)
					textBanner.moveText(self.nextBanner)
					var checkIsDone = setInterval(function () {
						if (banners.canGoNext()) {
							clearInterval(checkIsDone)
							setTimeout(function () {
								banners.curentBanner = banners.nextBanner
							}, 50)
						}
					}, 20)
				}
			}
		})
	},

	canGoNext: function () {
		if (banners.done.banner === true
			&& banners.done.move === true
			&& banners.done.change === true) {
			banners.canChange = true
			banners.done.banner = false
			banners.done.change = false
			banners.done.move = false
			return true
		}
		return false
	},

	changeBgBody: function (banner) {
		document.body.className = imgs[banner].bgClass
	},

	craeteBanners: function () {
		var banner = document.querySelector("#banner0")
		document.querySelector(".banner-content").style.width = `${this.widthP}%`
		document.querySelectorAll(".home-text").forEach(function (e) {
			e.style.width = `${banners.widthC}%`
		})
		imgs.forEach(function (b, key) {
			var newBanner = banner.cloneNode(true)
			newBanner.id = `banner${key}`
			newBanner.style.background = b.bg
			newBanner.style.zIndex = key + 1

			if (typeof b.link !== 'undefined') {
				newBanner.addEventListener('click', function () {
					content.showContent()
				})
			}
			newBanner.querySelector(".banner-img").src = `./assets/${b.img}.png`
			banner.parentNode.appendChild(newBanner)
		})
		banner.remove()
	}
}
export default banners
