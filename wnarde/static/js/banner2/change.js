import utils from '../utils.js'
import fakeJson from '../fake-ajax.js'
import create from './create.js'
import content from '../content.js'
import {allLayers} from '../banner/config.js'
const change = {
	currentBanner: 0,
	widthC: 100 / allLayers.length,
	changeBannerArrow: function (e) {
		document.querySelector('.banner-base').dispatchEvent(new Event('click'))
	},
	changeBanner: function (e) {
		if (e.clientY > utils.down) {
			content.showContent()
			return
		}
		change.currentBanner = e.target.dataset.pos
		if (typeof change.currentBanner === 'undefined') {
			change.currentBanner = e.target.parentNode.parentNode.dataset.pos
		}
		change.currentBanner = parseInt(change.currentBanner)
		if (utils.middle > e.clientX) {
			change.changeToPrevious()
			return
		}
		change.changeToNext()
	},
	changeToNext: function () {
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
		}, 30)
	},
	changeToPrevious: function () {
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
		}, 30)
	},
	appendNewBanner: function (isPrevius) {
		if (isPrevius) {
			var nextBanner = create.one(change.currentBanner - 1, true)
			var banner = document.querySelector(`#banner${change.currentBanner}`)
			if (nextBanner) {
				banner.parentNode.insertBefore(nextBanner, banner)
				return nextBanner
			}
			console.log('não zro entre')
		}
		var nextBanner = create.one(change.currentBanner + 1)
		var banner = document.querySelector('.banner-content')
		if (nextBanner) {
			banner.appendChild(nextBanner)
			return nextBanner
		}
		console.log('não entre')
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
