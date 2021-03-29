import utils from '../utils.js'
import content from '../content.js'
import {allLayers, allLayersMobile} from './config.js'
const bannerLayers = {
	fps: 30,
	mY: 0,
	mX: 0,
	changScreen: 0,
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
		setInterval(function () {
			var c = document.querySelector('.banner-central').style
			var s = document.querySelectorAll('.banner-secondary')
			if (bannerLayers.center < bannerLayers.mY) {
				var ban = document.querySelector('.banner-base');
				if (utils.pxToIn(ban.style.marginTop) < 50) {
					ban.style.marginTop = `${utils.pxToIn(ban.style.marginTop) + 2}px`
					c.top = `${utils.pxToIn(c.top) - 1}px`
					if (typeof s[0] != undefined)
						s[0].style.top = `${utils.pxToIn(s[0].style.top) - 3}px`

					if (typeof s[1] != undefined)
						s[1].style.top = `${utils.pxToIn(s[1].style.top) + 4}px`
				}
			}
			if (bannerLayers.center > bannerLayers.mY) {
				var ban = document.querySelector('.banner-base');
				if (utils.pxToIn(ban.style.marginTop) > 0) {
					ban.style.marginTop = `${utils.pxToIn(ban.style.marginTop) - 2}px`
					c.top = `${utils.pxToIn(c.top) + 1}px`
					if (typeof s[0] != undefined)
						s[0].style.top = `${utils.pxToIn(s[0].style.top) + 3}px`

					if (typeof s[1] != undefined)
						s[1].style.top = `${utils.pxToIn(s[1].style.top) - 4}px`
				}
			}
			if (bannerLayers.middle < bannerLayers.mX) {
				var ban = document.querySelector('.banner-base');
				if (utils.pxToIn(ban.style.marginLeft) < 50) {
					ban.style.marginLeft = `${utils.pxToIn(ban.style.marginLeft) + 2}px`
					c.left = `${utils.pxToIn(c.left) + 1}px`
					if (typeof s[0] != undefined)
						s[0].style.left = `${utils.pxToIn(s[0].style.left) + 3}px`

					if (typeof s[1] != undefined)
						s[1].style.left = `${utils.pxToIn(s[1].style.left) - 4}px`
				}
			}
			if (bannerLayers.middle > bannerLayers.mX) {
				var ban = document.querySelector('.banner-base');
				if (utils.pxToIn(ban.style.marginLeft) > 0) {
					ban.style.marginLeft = `${utils.pxToIn(ban.style.marginLeft) - 2}px`
					c.left = `${utils.pxToIn(c.left) - 1}px`
					if (typeof s[0] != undefined)
						s[0].style.left = `${utils.pxToIn(s[0].style.left) - 3}px`

					if (typeof s[1] != undefined)
						s[1].style.left = `${utils.pxToIn(s[1].style.left) + 4}px`
				}
			}
		}, 30)
	},
	mouseMove_: function () {
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
		if (middle > bannerlayers.mx) {
			var moved = (utils.middle - bannerlayers.mx)
			var tomove = (moved / 10)
			tomove = utils.pxtoin(chil.style.left) - tomove
			if (tomove < utils.middle - (limit / 1.3)) {
				tomove = `${chil.dataset.initpos}px`
			}

			chil.style.left = `${tomove}px`
		} else {
			var moved = (bannerlayers.mx - utils.middle)
			var tomove = (moved / 10)
			tomove = utils.pxtoin(chil.style.left) + tomove
			if (tomove > utils.middle - (limit / 3)) {
				tomove = `${chil.dataset.initpos}px`
			}

			chil.style.left = `${tomove}px`
		}
	},
	moveCentral: function (middle, limit) {
		const chil = document.querySelector('.banner-central')
		if (middle > bannerLayers.mX) {
			var moved = (utils.middle - bannerLayers.mX)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) + toMove
			if (toMove > utils.middle - (limit / 3)) {
				toMove = `${chil.dataset.initPos}px`
			}

			chil.style.left = `${toMove}px`
		} else {
			var moved = (bannerLayers.mX - utils.middle)
			var toMove = (moved / 10)
			toMove = utils.pxToIn(chil.style.left) - toMove
			if (toMove < utils.middle - (limit / 1.3)) {
				toMove = `${chil.dataset.initPos}px`
			}

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
			div.dataset.initPos = ((window.screen.width - this.width) / 2)
		}
		img.style.cursor = 'pointer'
		img.onclick = function () {
			content.showContent()
			document.body.className = document.body.classList[0]
		}
		return div
	}
}
export default bannerLayers
