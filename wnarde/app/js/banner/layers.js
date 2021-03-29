import utils from '../utils.js'
const bannerLayers = {
	fps: 30,
	mY: 0,
	mX: 0,
	changScreen: 0,
	screen: window.screen,
	middle: window.screen.width / 2,
	toMove: 100,
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
		setInterval(function () {
			if (bannerLayers.mY > window.screen.height / 2) {
				document.body.style.cursor = 'pointer'
				return
			}
			document.body.style.cursor = 'alias'
			const middle = window.screen.width / 2
			var base = document.querySelector('.banner-base')
			for (var i = 0, len = base.children.length; i < len; i++) {
				var chil = base.children.item(i)
				var limit = chil.querySelector('img').width
				if (chil.className != 'banner-text') {
					if (chil.className === 'banner-central') {
						bannerLayers.moveCentral(middle, limit)
					}
					if (chil.className === 'banner-secondary') {
						bannerLayers.moveSecundary(middle, limit)
					}
				}
			}
		}, 80)
	},
	moveSecundary: function (middle, limit) {
		const chil = document.querySelector('.banner-secondary')
		if (middle > bannerLayers.mX) {
			var moved = (utils.middle - bannerLayers.mX)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) - toMove
			if (toMove < utils.middle - (limit / 1.3))
				return

			chil.style.left = `${toMove}px`
		} else {
			var moved = (bannerLayers.mX - utils.middle)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) + toMove
			if (toMove > utils.middle - (limit / 3))
				return

			chil.style.left = `${toMove}px`
		}
	},
	moveCentral: function (middle, limit) {
		const chil = document.querySelector('.banner-central')
		if (middle > bannerLayers.mX) {
			var moved = (utils.middle - bannerLayers.mX)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) + toMove
			if (toMove > utils.middle - (limit / 3))
				return

			chil.style.left = `${toMove}px`
		} else {
			var moved = (bannerLayers.mX - utils.middle)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) - toMove
			if (toMove < utils.middle - (limit / 1.3))
				return

			chil.style.left = `${toMove}px`
		}
	},
	setPorcent: function () {
		return this.middle / this.toMove
	},
	checkDistance: function (mousePos) {
		return parseInt(mousePos / this.setPorcent())
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
		}
		return div
	}
}
export default bannerLayers
