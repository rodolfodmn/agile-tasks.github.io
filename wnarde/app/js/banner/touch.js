import utils from '../utils.js'
import create from './create.js'
import {allLayersMobile} from './config.js'

const touch = {
	initPosX: 0,
	posX: null,
	bannersAround: {},
	nextBanner: null,
	currentBanner: 0,
	bannersPos: {
		p: '0%',
		n: '0%'
	},
	checkDirection: function () {
		if (touch.posX > touch.initPosX) {
			return true
		}
		return false
	},
	start: function (e) {
		touch.initPosX = e.changedTouches[0].clientX
	},
	move: function (e) {
		touch.posX = e.changedTouches[0].clientX
		if (touch.checkDirection()) {
			touch.toPrevious()
			return
		}
		touch.toNext()
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
		touch.posX = e.changedTouches[0].clientX
		if (touch.checkDirection()) {
			touch.leavePrevious()
			return
		}
		touch.leaveNext()
	},
	leavePrevious: function () {
		var nextBanner = touch.nextBanner
		var restore = setInterval(function () {

			if (utils.prToIn(nextBanner.style.width) <= 30) {
				if (utils.prToIn(nextBanner.style.width) > 49) {
					clearInterval(restore)
					return
				}
				nextBanner.style.width = `${utils.prToIn(nextBanner.style.width) - 1}%`
				return
			}
			if (utils.prToIn(nextBanner.style.width) >= 30) {
				if (utils.prToIn(nextBanner.style.width) > 49) {
					clearInterval(restore)
					touch.destroyBanner(true)
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
					touch.destroyBanner(false)
					clearInterval(restore)
					return
				}
				return
			}
			if (utils.prToIn(banner.style.width) >= 30) {
				banner.style.width = `${utils.prToIn(banner.style.width) + 1}%`
				if (utils.prToIn(banner.style.width) > 49) {
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
	destroyBanner: function () {
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		banner.remove()
		touch.currentBanner = touch.nextBanner.dataset.pos
	}
}
export default touch
