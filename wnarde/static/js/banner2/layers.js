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
			var toMove = 0
			const middle = window.screen.width / 2
			var base = document.querySelector('.banner-base')
			for (var i = 0, len = base.children.length; i < len; i++) {
				var chil = base.children.item(i)
				if (middle < bannerLayers.mX) {
					toMove = bannerLayers.mX - middle
					toMove = parseInt((chil.style.left).replace('px', '')) + bannerLayers.checkDistance(toMove)
					if (parseInt((chil.style.left).replace('px', '')) > window.screen.width / 2) {
						return
					}
					chil.style.left = (toMove - 5 * i + 1) + 'px'
				} else {
					toMove = (bannerLayers.mX - middle) * -1
					toMove = parseInt((chil.style.left).replace('px', '')) - bannerLayers.checkDistance(toMove)
					if (parseInt((chil.style.left).replace('px', '')) <= 0) {
						return
					}
					chil.style.left = (toMove + 6 * i + 1) + 'px'
				}
			}
		}, 60)
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
		var div = document.createElement('div')
		var img = document.createElement('img')
		img.src = `/wnarde/assets/banners/${layer.src}.png`
		div.append(img)
		div.className = id
		div.style.top = layer.pos.top
		div.style.left = (window.screen.width / 4 + parseInt(layer.pos.left))
		return div
	}
}
export default bannerLayers
