import utils from '../utils.js'
import content from '../content.js'
import movement from './movement.js'
const bannerLayers = {
	fps: 30,
	mY: 0,
	mX: 0,
	changScreen: 0,
	cleanInterval: false,
	screen: window.screen,
	middle: window.screen.width / 2,
	center: window.screen.height / 2,
	init: function (layer) {
		var base = bannerLayers.createBanner(layer)
		bannerLayers.mouseMove(document.querySelector('.banner-content'))
		return base
	},
	mouseMove: function () {
		window.onmousemove = function (e) {
			bannerLayers.mX = e.clientX
			bannerLayers.mY = e.clientY
		}
		var moveInterval = setInterval(function () {
			if (bannerLayers.cleanInterval) {
				clearInterval(moveInterval)
			}
			bannerLayers.cleanInterval = false
			if (bannerLayers.mY > bannerLayers.center / 2) {
				movement.toDown()
			}
			if (bannerLayers.mY < bannerLayers.center / 2) {
				movement.toUp()
			}
			if (bannerLayers.mX < bannerLayers.middle / 2) {
				movement.toRight()
			}
			if (bannerLayers.mX > bannerLayers.middle) {
				movement.toLeft()
			}
		}, 60)
	},
	cleanMovement: function () {
		this.cleanInterval = true
	},
	needClean: function () {
		return this.cleanInterval
	},
	createBanner: function (layer) {
		var banner = document.createElement('div')
		banner.className = 'banner-base'
		banner.append(this.createCentral(layer.central))
		layer.secondary.forEach(function (s) {
			banner.append(bannerLayers.createSecondary(s))
		})
		banner.append(this.createText(layer.text))
		return banner
	},
	createCentral: function (layer) {
		return this.createLayer(layer, 'banner-central')
	},
	createSecondary: function (layer) {
		return this.createLayer(layer, 'banner-secondary')
	},
	createText: function (layer) {
		return this.createLayer(layer, 'banner-text')
	},
	createLayer: function (layer, id) {
		const div = document.createElement('div')
		const img = document.createElement('img')
		img.src = `assets/banners/${layer.src}.png`
		if (window.screen.width < 800)
			img.src = `assets/bannersMobile/${layer.src}.png`

		div.append(img)
		div.className = id
		div.style.top = layer.pos.top
		img.onload = function () {
			div.style.left = ((window.screen.width - this.width) / 2)
			div.dataset.initPos = ((window.screen.width - this.width) / 2)
		}
		img.style.cursor = 'pointer'
		img.parentElement.onclick = function () {
			content.showContent()
			document.body.className = document.body.classList[0]
		}
		return div
	},
	setPorcent: function () {
		return this.middle / this.toMove
	},
	checkDistance: function (mousePos) {
		return parseInt(mousePos / this.setPorcent())
	},
}
export default bannerLayers
