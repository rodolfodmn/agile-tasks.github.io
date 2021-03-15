import {imgs} from './banner-config.js'
import content from './content.js'

const banners = {

	curentBanner: 0,
	nextBanner: 1,
	widthDecrise: 0,
	widthIncrise: 0,
	widthC: 100 / imgs.length,
	widthP: 100 * imgs.length,

	setupBanners: function () {
		this.craeteBanners()
		this.setEvents()
	},

	setEvents: function () {
		const self = this
		document.querySelector(".tright").addEventListener("click", function () {
			if (self.curentBanner > 0) {
				self.nextBanner = self.curentBanner - 1
				self.changeBgBody(self.nextBanner)

				var move = setInterval(function () {
					var cbEle = document.querySelector(`#banner${self.curentBanner - 1} `)
					self.widthIncrise += 1
					if (self.widthIncrise <= self.widthC) {
						cbEle.style.width = `${0 + self.widthIncrise}%`
						return
					}
					cbEle.style.width = `${0 + self.widthC}%`
					self.widthIncrise = 0
					clearInterval(move)
					self.curentBanner = self.nextBanner
				}, 30)
			}
		})

		document.querySelector(".tleft").addEventListener("click", function () {
			if (self.curentBanner < imgs.length - 1) {
				self.nextBanner = self.curentBanner + 1
				self.curentBannerW = 0
				self.changeBgBody(self.nextBanner)

				var move = setInterval(function () {
					var cbEle = document.querySelector(`#banner${self.curentBanner} `)
					self.widthDecrise += 1
					if (self.widthDecrise <= self.widthC) {
						cbEle.style.width = `${self.widthC - self.widthDecrise}%`
						return
					}
					cbEle.style.width = `${self.widthC - self.widthC}%`
					self.widthDecrise = 0
					clearInterval(move)
					self.curentBanner = self.nextBanner
				}, 30)
			}
		})
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
			newBanner.querySelector("img").src = `./assets/${b.img}.png`
			banner.parentNode.appendChild(newBanner)
		})
		banner.remove()
	}
}
export default banners
