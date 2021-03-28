import utils from '../utils.js'
import bannerLayers from './layers.js'
import fakeJson from '../fake-ajax.js'
import create from './create.js'
import content from '../content.js'
import {allLayers} from './config.js'

const change = {
	canChange: true,
	currentBanner: 0,
	widthC: 100 / allLayers.length,
	changeBannerArrow: function (e) {
		if (change.canChange) {
			document.querySelector('.banner-base').dispatchEvent(new Event('click'))
		}
	},
	changeBanner: function (e) {
		if (e.clientY > utils.down) {
			content.showContent()
			return
		}
		if (change.canChange) {
			change.currentBanner = e.target.dataset.pos
			if (typeof change.currentBanner === 'undefined') {
				change.currentBanner = e.target.parentNode.parentNode.dataset.pos
			}
			change.currentBanner = parseInt(change.currentBanner)
			if (utils.middle > bannerLayers.mX) {
				change.changeToPrevious()
				return
			}
			change.changeToNext()
		}
	},
	changeToNext: function () {
		change.canChange = false
		const banner = document.querySelector(`#banner${change.currentBanner}`)
		change.appendNewBanner()
		var hidde = setInterval(function () {
			if (utils.prToIn(banner.style.width) > 0) {
				banner.style.width = `${utils.prToIn(banner.style.width) - 1}%`
				return
			}
			banner.style.width = 0
			change.destroyBanner()
			clearInterval(hidde)
			fakeJson.init()
			change.canChange = true
		}, 30)
	},
	changeToPrevious: function () {
		change.canChange = false
		const banner = change.appendNewBanner(true)
		var hidde = setInterval(function () {
			if (utils.prToIn(banner.style.width) < 49) {
				banner.style.width = `${utils.prToIn(banner.style.width) + 1}%`
				return
			}
			banner.style.width = '50%'
			change.destroyBanner(true)
			clearInterval(hidde)
			fakeJson.init()
			change.canChange = true
		}, 30)
	},
	appendNewBanner: function (isPrevius) {
		if (isPrevius) {
			var nextBanner = create.one(change.currentBanner - 1, true, true)
			var banner = document.querySelector(`#banner${change.currentBanner}`)
			if (nextBanner) {
				banner.parentNode.insertBefore(nextBanner, banner)
				document.body.className = allLayers[nextBanner.dataset.pos].bg
				return nextBanner
			}
		}
		var nextBanner = create.one(change.currentBanner + 1, false, true)
		var banner = document.querySelector('.banner-content')
		if (nextBanner) {
			document.body.className = allLayers[nextBanner.dataset.pos].bg
			banner.appendChild(nextBanner)
			return nextBanner
		}
	},
	destroyBanner: function (isPrevius) {
		if (isPrevius) {
			var banner = document.querySelector(`#banner${change.currentBanner}`)
			if (banner)
				banner.remove()
			return
		}
		var banner = document.querySelector(`#banner${change.currentBanner}`)
		if (banner)
			banner.remove()
	}
}
export default change
