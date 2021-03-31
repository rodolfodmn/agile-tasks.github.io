import create from './create.js'

const touch = {
	initPosX: 0,
	posX: null,
	bannersAround: {},
	currentBanner: 0,
	bannersPos: {
		p: '0%',
		n: '0%'
	},
	setAround: function () {
		touch.bannersAround = touch.appendNewBanners()
	},
	start: function (e) {
		touch.initPosX = e.changedTouches[0].clientX
		setInterval(function () {
			touch.move()
		}, 80)
	},
	checkDirection: function (clientX) {
		if (clientX > touch.initPosX) {
			return true
		}
		return false
	},
	move: function () {
		if (touch.checkDirection(touch.posX)) {
			touch.toPrevious()
			return
		}
		touch.toNext()
	},
	bannerUpdate: function (ev) {
		touch.posX = ev.changedTouches[0].clientX
		touch.bannersAround.p.style.width = touch.bannersPos.p
	},
	toPrevious: function () {
		var moved = (touch.posX - touch.initPosX) / touch.getPercent()
		moved = (moved - 100)
		touch.bannersPos.p = moved + '%'
		//var banner = document.querySelector(`#banner${touch.currentBanner}`)
		//banner.style.width = `${(moved - 100) * 2}%`
	},
	toNext: function (posX) {
		console.log('n')
		//var moved = (posX - touch.initPosX) / touch.getPercent()
		//var banner = document.querySelector(`#banner${touch.currentBanner}`)
		//banner.style.width = `${(moved - 100) * 2}%`
		//if (moved > 90) {
		//moved = 100
		//touch.destroyBanner(true)
		//touch.currentBanner = touch.nextBanner.dataset.pos
		//}
		//touch.changeToPrevious(moved)

	},
	leave: function (isPrevius) {
		//var toRestore = (isPrevius) ? touch.nextBanner.dataset.pos : touch.currentBanner
		//toRestore = touch.currentBanner
		//const banner = document.querySelector(`#banner${toRestore}`)
		//var restore = setInterval(function () {
		//if (utils.prToIn(banner.style.width) < 50) {
		//banner.style.width = `${utils.prToIn(banner.style.width) + 1}%`
		//return
		//}
		//if (utils.prToIn(banner.style.width) > 50) {
		//banner.style.width = `${utils.prToIn(banner.style.width) - 1}%`
		//return
		//}
		//clearInterval(restore)
		//}, 60)
	},
	getPercent: function () {
		return window.screen.width / 100
	},
	appendNewBanners: function () {
		var previousBanner = create.one(touch.currentBanner - 1, true, true)
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		banner.parentNode.insertBefore(previousBanner, banner)
		//var nextBanner = create.one(touch.currentBanner + 1, false, true)
		//banner = document.querySelector('.banner-content')
		//banner.appendChild(nextBanner)
		return {
			p: previousBanner,
			//n: nextBanner
		}
	},
	destroyBanner: function (isPrevius) {
		if (isPrevius) {
			var banner = document.querySelector(`#banner${touch.currentBanner}`)
			if (banner)
				banner.remove()
			return
		}
		var banner = document.querySelector(`#banner${touch.currentBanner}`)
		if (banner)
			banner.remove()
	}
}
export default touch
