import {imgs} from './config.js'
import banners from './banners.js'
const change = {
	widthDecrise: 0,
	widthIncrise: 0,
	widthC: 100 / imgs.length,
	widthP: 100 * imgs.length,
	toMove: 0,

	move: function (id, isRight) {
		if (isRight) {
			var move = setInterval(function () {
				var cbEle = document.querySelector(`#banner${id - 1}`)
				change.widthIncrise += 1
				if (change.widthIncrise <= change.widthC) {
					cbEle.style.width = `${0 + change.widthIncrise}%`
					banners.done.banner = false
					return
				}
				cbEle.style.width = `${0 + change.widthC}%`
				change.widthIncrise = 0
				clearInterval(move)
				banners.done.banner = true
			}, 30)
		} else {
			var move = setInterval(function () {
				var cbEle = document.querySelector(`#banner${id - 1}`)
				change.widthDecrise += 1
				if (change.widthDecrise <= change.widthC) {
					cbEle.style.width = `${change.widthC - change.widthDecrise}%`
					banners.done.banner = false
					return
				}
				cbEle.style.width = `${change.widthC - change.widthC}%`
				change.widthDecrise = 0
				banners.done.banner = true
				clearInterval(move)
			}, 30)
		}
	},
}
export default change
