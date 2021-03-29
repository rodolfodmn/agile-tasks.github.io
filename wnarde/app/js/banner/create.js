import bannerLayers from './layers.js'
import change from './change.js'
import {allLayers, allLayersMobile} from './config.js'
const create = {
	allL: allLayers,
	init: function () {
		if (window.screen.width < 800) {
			create.allL = allLayersMobile
		}
		document.querySelector('.tright').addEventListener('click', change.changeBannerArrow)
		document.querySelector('.tleft').addEventListener('click', change.changeBannerArrow)

		const bannerContent = document.querySelector('.banner-content')
		bannerContent.innerHTML = ''
		bannerContent.style.width = '200%'
		create.allL.slice(0, 1).forEach(function (layer, key) {
			var banner = create.one(key, false)
			bannerContent.append(banner)
		})
	},
	one: function (pos, isPrevius) {
		if (pos < 0) {
			pos = allLayers.length - 1
		}
		if (pos > allLayers.length - 1) {
			pos = 0
		}

		var banner = bannerLayers.init(create.allL[pos])
		banner.id = `banner${pos}`
		banner.style.width = (isPrevius) ? 0 : '50%'
		banner.style.zIndex = 1
		banner.style.position = 'relative'
		banner.dataset.pos = pos
		banner.addEventListener('click', change.changeBanner)
		return banner
	}
}
export default create
