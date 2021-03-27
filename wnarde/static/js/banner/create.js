import bannerLayers from './layers.js'
import change from './change.js'
import {allLayers} from './config.js'
const create = {
	init: function () {
		document.querySelector('.tright').addEventListener('click', change.changeBannerArrow)
		document.querySelector('.tleft').addEventListener('click', change.changeBannerArrow)

		const bannerContent = document.querySelector('.banner-content')
		bannerContent.innerHTML = ''
		bannerContent.style.width = '200%'
		allLayers.slice(0, 1).forEach(function (layer, key) {
			var banner = create.one(key, false)
			bannerContent.append(banner)
		})
	},
	one: function (pos, isPrevius) {
		var zi = pos
		if (pos == 0) {
			pos = allLayers.length - 1
			var zi = allLayers.length
		}
		if (pos > allLayers.length - 1) {
			pos = 0
		}
		var banner = bannerLayers.init(allLayers[pos])
		banner.id = `banner${pos}`
		banner.style.width = (isPrevius) ? 0 : '50%'
		banner.style.zIndex = zi
		banner.style.position = 'relative'
		banner.dataset.pos = pos
		banner.addEventListener('click', change.changeBanner)
		return banner
	}
}
export default create
