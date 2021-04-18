import utils from '../utils.js'
import create from './create.js'
import fakeJson from '../fake-ajax.js'
import {allLayersMobile} from './config.js'

const touch = {
	isPost: false,
	canLeave: false,
	initPosX: 0,
	posX: null,
	bannersAround: {},
	nextBanner: null,
	currentBanner: 0,
	transitionDone: true,

	checkDirection: function () {
		if (touch.posX > touch.initPosX) {
			return true
		}
		return false
	},
	start: function (e) {
		if (touch.onlyOne(e)) {
			touch.initPosX = e.changedTouches[0].clientX
		}
	},
	move: function (e) {
		if (!touch.isPost) {
			if (touch.onlyOne(e)) {
				touch.canLeave = true
				touch.transitionDone = false
				touch.posX = e.changedTouches[0].clientX
				if (touch.checkDirection()) {
					touch.toPrevious()
					return
				}
				touch.toNext()
			}
		}
	},
	onlyOne: function (e) {
		return e.changedTouches.length < 2
	},
	toPrevious: function () {
		touch.appendPrevius()
		var moved = (touch.posX - touch.initPosX) / touch.getPercent()
		touch.nextBanner.style.width = `${moved}%`
	},
	toNext: function () {
		touch.appendNext()
		var moved = (touch.posX) / touch.getPercent()
		document.querySelector(`#banner${touch.currentBanner}`).style.width = `${moved}%`
	},
	leave: function (e) {
		if (touch.canLeave) {
			touch.canLeave = false
			if (!touch.isPost) {
				if (touch.onlyOne(e)) {
					touch.posX = e.changedTouches[0].clientX
					if (touch.checkDirection()) {
						touch.leavePrevious()
						return
					}
					touch.leaveNext()
				}
			}
		}
	},
	leavePrevious: function () {
		var nextBanner = touch.nextBanner
		var restore = setInterval(function () {
			if (utils.prToIn(nextBanner.style.width) <= 30) {
				if (utils.prToIn(nextBanner.style.width) < 1) {
					touch.destroyBannerP()
					clearInterval(restore)
					return
				}
				nextBanner.style.width = `${utils.prToIn(nextBanner.style.width) - 1}%`
				return
			}
			if (utils.prToIn(nextBanner.style.width) >= 30) {
				if (utils.prToIn(nextBanner.style.width) > 49) {
					clearInterval(restore)
					touch.destroyBanner()
					return
				}
				nextBanner.style.width = `${utils.prToIn(nextBanner.style.width) + 1}%`
				return
			}
			clearInterval(restore)
		}, 30)
	},
	leaveNext: function () {
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		var restore = setInterval(function () {
			if (utils.prToIn(banner.style.width) <= 30) {
				banner.style.width = `${utils.prToIn(banner.style.width) - 1}%`
				if (utils.prToIn(banner.style.width) < 1) {
					touch.destroyBanner()
					clearInterval(restore)
					return
				}
				return
			}
			if (utils.prToIn(banner.style.width) >= 30) {
				banner.style.width = `${utils.prToIn(banner.style.width) + 1}%`
				if (utils.prToIn(banner.style.width) > 49) {
					touch.destroyBannerN()
					clearInterval(restore)
					return
				}
				return
			}
			clearInterval(restore)
		}, 30)
	},
	getPercent: function () {
		return window.screen.width / 100
	},
	appendNext: function () {
		var nextBannerID = parseInt(touch.currentBanner) + 1
		if (touch.currentBanner == allLayersMobile.length - 1) {
			nextBannerID = 0
		}
		if (document.querySelector(`#banner${nextBannerID}`)) {
			return
		}
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		var nextBanner = create.one(nextBannerID, false, true)
		banner = document.querySelector('.banner-content')
		banner.appendChild(nextBanner)
		touch.nextBanner = nextBanner
	},
	appendPrevius: function () {
		var nextBannerID = parseInt(touch.currentBanner) - 1
		if (touch.currentBanner == 0) {
			nextBannerID = allLayersMobile.length - 1
		}
		if (document.querySelector(`#banner${nextBannerID}`)) {
			return
		}
		var previousBanner = create.one(nextBannerID, true, true)
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		banner.parentNode.insertBefore(previousBanner, banner)
		touch.nextBanner = previousBanner
	},
	destroyBannerP: function () {
		var banner = touch.nextBanner
		banner.remove()
		touch.transitionDone = true
	},
	destroyBannerN: function () {
		var banner = touch.nextBanner
		banner.remove()
		touch.transitionDone = true
	},
	destroyBanner: function () {
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		banner.remove()
		touch.updateBanners()
		touch.transitionDone = true
		fakeJson.init()
	},
	updateBanners: function () {
		touch.currentBanner = touch.nextBanner.dataset.pos
		document.body.className = allLayersMobile[touch.currentBanner].bg
	}
}
export default touch
