import {allLayers} from './config.js'
const bannerLayers = {
	fps: 30,
	mY: 0,
	mX: 0,
	changScreen: 0,
	screen: window.screen,
	middle: window.screen.width / 2,
	toMove: 100,
	init: function () {
		document.querySelector('.banner-content').innerHTML = ''
		allLayers.forEach(function (layer) {
			var base = bannerLayers.crateBanner(layer)
			document.querySelector('.banner-content').append(base)
			bannerLayers.mouseMove(document.querySelector('.banner-content'))
		})
	},
	mouseMove: function (ele) {
		window.onmousemove = function (e) {
			bannerLayers.mX = e.clientX
			bannerLayers.mY = e.clientY
		}
		setInterval(function () {
			var toMove = 0
			const middle = window.screen.width / 2
			var base = document.querySelector('#banner-base')
			for (var i = 0, len = base.children.length; i < len; i++) {
				var chil = base.children.item(i)
				if (middle < bannerLayers.mX) {
					toMove = bannerLayers.mX - middle
					console.log(bannerLayers.checkDistance(toMove))
					toMove = parseInt((chil.style.left).replace('px', '')) + bannerLayers.checkDistance(toMove)
					console.log(toMove)
					chil.style.left = toMove + 'px'
				} else {
					toMove = (bannerLayers.mX - middle) * -1
					console.log(bannerLayers.checkDistance(toMove))
					toMove = parseInt((chil.style.left).replace('px', '')) - bannerLayers.checkDistance(toMove)
					console.log(toMove)
					chil.style.left = toMove + 'px'
				}
			}
		}, 1000)
	},
	setPorcent: function () {
		return this.middle / this.toMove
	},
	checkDistance: function (mousePos) {
		return parseInt(mousePos / this.setPorcent())
	},
	crateBanner: function (layer) {
		var banner = document.createElement('div')
		banner.id = 'banner-base'
		banner.append(this.crateCentral(layer.central))
		banner.append(this.crateSecondary(layer.secondary))
		banner.append(this.crateText(layer.text))
		return banner
	},
	crateCentral: function (layer) {
		return this.createLayer(layer, 'banner-central')
	},
	crateSecondary: function (layer) {
		return this.createLayer(layer, 'banner-secondary')
	},
	crateText: function (layer) {
		return this.createLayer(layer, 'banner-text')
	},
	createLayer: function (layer, id) {
		var div = document.createElement('div')
		var img = document.createElement('img')
		img.src = `../../../assets/banners/${layer.src}.png`
		div.append(img)
		div.id = id
		div.style.top = layer.pos.top
		div.style.left = layer.pos.left
		return div
	}
}
export default bannerLayers
