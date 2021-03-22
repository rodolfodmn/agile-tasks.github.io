import {allLayers} from './config.js'
const bannerLayers = {
	init: function () {
		document.querySelector('.banner-content').innerHTML = ''
		allLayers.forEach(function (layer) {
			var base = bannerLayers.crateBanner(layer)
			document.querySelector('.banner-content').append(base)
			bannerLayers.mouseMove(document.querySelector('.banner-content'))
		})
	},
	mouseMove: function (ele) {
		console.log(ele)
		const screen = window.screen
		const middle = screen.width / 2
		ele.addEventListener('mousemove', function (ev) {
			var base = ev.target.parentNode.parentNode
			for (var i = 0, len = base.children.length; i < len; i++) {
				if (middle < ev.clientX) {
					base.children.item(i).style.left = newPos
				} else {
					base.children.item(i).style.left = newPos
				}
			}
		})
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
