import {imgs} from './banner-config.js'
import banners from './banners.js'
const textBanner = {
	currentImg: 0,
	canChange: true,

	init: function () {
		this.createImgs()
	},

	createImgs: function () {
		const imgContent = document.querySelector('.text-ba')
		imgContent.innerHTML = ''
		imgs.forEach(function (banner, id) {
			var img = document.createElement('img')
			img.id = `img-ban-${id}`
			img.src = `./assets/${banner.text.src}.png`
			img.style.top = `${banner.text.pos.top}`
			img.style.left = `${banner.text.pos.left}`
			if (id === 0) {
				img.style.opacity = 1
			}
			imgContent.appendChild(img)
		})
	},

	change: function (id, isRight) {
		var newImg = document.querySelector(`#img-ban-${id}`)
		var oldImg = document.querySelector(`#img-ban-${id - 1}`)
		if (isRight) {
			var oldImg = document.querySelector(`#img-ban-${id + 1}`)
		}
		const imgContent = document.querySelector('.text-ba')

		imgContent.childNodes.forEach(function (e) {
			if (e !== oldImg) {
				e.style.opacity = 0
			}
		})
		var show = setInterval(function () {
			if (newImg.style.opacity < 1) {
				newImg.style.opacity = `${parseFloat(newImg.style.opacity) + 0.1}`
				banners.done.change = false
				return
			}
			newImg.style.opacity = 1
			clearInterval(show)
			banners.done.change = true
		}, 110)

		var hidde = setInterval(function () {
			if (oldImg.style.opacity > 0) {
				oldImg.style.opacity = `${parseFloat(oldImg.style.opacity) - 0.1}`
				banners.done.change = false
				return
			}
			newImg.style.opacity = 1
			banners.done.change = true
			clearInterval(hidde)
		}, 80)
	},

	speed: function (oldTop, topFinal) {
		var top = parseInt((oldTop).replace('px', ''))
		var speed = parseInt(topFinal) - top
		speed = (speed < 0) ? speed * -1 : speed
		speed = speed - 200
		speed = (speed < 0) ? speed * -1 : speed
		return speed = speed / 4
	},

	moveText: function (id, isRight) {
		const topFinal = imgs[id].text.pos.top
		var newImg = document.querySelector(`#img-ban-${id}`)
		var oldImg = document.querySelector(`#img-ban-${id - 1}`)
		if (isRight) {
			var newImg = document.querySelector(`#img-ban-${id}`)
			var oldImg = document.querySelector(`#img-ban-${id + 1}`)
		}
		var speed = textBanner.speed(oldImg.style.top, topFinal)

		newImg.style.top = oldImg.style.top
		if (topFinal < parseInt((oldImg.style.top).replace('px', ''))) {
			var move = setInterval(function () {
				var top = parseInt((newImg.style.top).replace('px', ''))
				if (top > topFinal) {
					newImg.style.top = `${top - 3}px`
					banners.done.move = false
					return
				}
				newImg.style.top = `${topFinal}px`
				banners.done.move = true
				clearInterval(move)
			}, speed)
		} else {
			var move = setInterval(function () {
				var top = parseInt((newImg.style.top).replace('px', ''))
				if (top < topFinal) {
					newImg.style.top = `${top + 3}px`
					banners.done.move = false
					return
				}
				newImg.style.top = `${topFinal}px`
				banners.done.move = true
				clearInterval(move)
			}, speed)
		}
	},
}
export default textBanner
