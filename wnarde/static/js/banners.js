import {imgs} from './banner-config.js'
import content from './content.js'

const banners = {

	curentBanner: 0,
	nextBanner: 1,
	widthDecrise: 0,
	widthIncrise: 0,
	widthC: 100 / imgs.length,
	widthP: 100 * imgs.length,
	toMove: 0,

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
				self.changeBannerText(self.nextBanner)
				self.moveTextR(self.nextBanner)

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
				self.changeBannerText(self.nextBanner)
				self.moveTextL(self.nextBanner)

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

	moveTextL: function (bannerID) {
		const banner = document.querySelector(`#banner${bannerID}`)
		const textBanner = banner.querySelector('.img-text').style
		const newTop = (imgs[bannerID] ? imgs[bannerID].text.pos.top : 350)
		const OldTop = (imgs[bannerID - 1] ? imgs[bannerID - 1].text.pos.top : 350)
		textBanner.top = OldTop

		let idP = bannerID - 1
		if (bannerID < 1) {
			idP = 0
		}
		let idN = bannerID + 1
		if (bannerID === imgs.length - 1) {
			idN = imgs.length - 1
		}
		const bannerN = document.querySelector(`#banner${idN}`)
		const bannerP = document.querySelector(`#banner${idP}`)
		bannerN.querySelector('.img-text').style.top = newTop
		bannerP.querySelector('.img-text').style.top = newTop
		var move = setInterval(function () {
			var currentT = parseInt((textBanner.top).replace('px', ''))
			if (OldTop - newTop > 0) {
				if (currentT >= newTop) {
					banners.toMove += 3
					textBanner.top = `${OldTop - banners.toMove}px`
					return
				}
			} else {
				if (currentT < newTop) {
					banners.toMove += 3
					textBanner.top = `${parseInt(OldTop) + banners.toMove}px`
					return
				}
			}
			banners.toMove = 0
			clearInterval(move)
		}, 10)
	},

	moveTextR: function (bannerID) {
		const banner = document.querySelector(`#banner${bannerID}`)
		const textBanner = banner.querySelector('.img-text').style
		const newTop = (imgs[bannerID] ? imgs[bannerID].text.pos.top : 350)
		const OldTop = (imgs[bannerID + 1] ? imgs[bannerID + 1].text.pos.top : 350)
		textBanner.top = OldTop
		console.log(OldTop)

		let idP = bannerID + 1
		if (bannerID === imgs.length - 1) {
			idP = bannerID
		}
		let idN = bannerID - 1
		if (bannerID < 1) {
			idN = 1
		}
		const bannerN = document.querySelector(`#banner${idN}`)
		const bannerP = document.querySelector(`#banner${idP}`)
		bannerN.querySelector('.img-text').style.top = newTop
		bannerP.querySelector('.img-text').style.top = newTop
		var move = setInterval(function () {
			var currentT = parseInt((textBanner.top).replace('px', ''))
			if (OldTop - newTop > 0) {
				if (currentT >= newTop) {
					banners.toMove += 3
					textBanner.top = `${OldTop - banners.toMove}px`
					return
				}
			} else {
				if (currentT < newTop) {
					banners.toMove += 3
					textBanner.top = `${parseInt(OldTop) + banners.toMove}px`
					return
				}
			}
			banners.toMove = 0
			clearInterval(move)
		}, 50)
	},
	changeBannerText: function (bannerID) {
		const banner = document.querySelector(`#banner${bannerID}`)
		const textBanner = banner.querySelector('.img-text').style

		banner.parentNode.querySelectorAll('.img-text').forEach(function (img) {
			img.style.opacity = 0
		})
		var show = setInterval(function () {
			if (textBanner.opacity < 1) {
				textBanner.opacity = `${parseFloat(textBanner.opacity) + 0.1}`
				return
			}
			textBanner.opacity = 1
			clearInterval(show)
		}, 80)
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
			newBanner.querySelector(".img-text").src = `./assets/${b.text.src}.png`
			newBanner.querySelector(".img-text").style.top = `${b.text.pos.top}`
			newBanner.querySelector(".img-text").style.left = `${b.text.pos.left}`
			banner.parentNode.appendChild(newBanner)
		})
		banner.remove()
	}
}
export default banners
