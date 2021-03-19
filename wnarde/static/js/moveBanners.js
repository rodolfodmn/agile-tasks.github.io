import {imgs} from './banner-config.js'
import banners from './banners.js'
const moveBanners = {
	widthDecrise: 0,
	widthIncrise: 0,
	widthC: 100 / imgs.length,
	widthP: 100 * imgs.length,
	toMove: 0,

	move: function (id, isRight) {
		if (isRight) {
			var move = setInterval(function () {
				var cbEle = document.querySelector(`#banner${id - 1}`)
				moveBanners.widthIncrise += 1
				if (moveBanners.widthIncrise <= moveBanners.widthC) {
					cbEle.style.width = `${0 + moveBanners.widthIncrise}%`
					banners.done.banner = false
					return
				}
				cbEle.style.width = `${0 + moveBanners.widthC}%`
				moveBanners.widthIncrise = 0
				clearInterval(move)
				banners.done.banner = true
			}, 30)
		} else {
			var move = setInterval(function () {
				var cbEle = document.querySelector(`#banner${id - 1}`)
				moveBanners.widthDecrise += 1
				if (moveBanners.widthDecrise <= moveBanners.widthC) {
					cbEle.style.width = `${moveBanners.widthC - moveBanners.widthDecrise}%`
					banners.done.banner = false
					return
				}
				cbEle.style.width = `${moveBanners.widthC - moveBanners.widthC}%`
				moveBanners.widthDecrise = 0
				banners.done.banner = true
				clearInterval(move)
			}, 30)
		}
	},
}
export default moveBanners
