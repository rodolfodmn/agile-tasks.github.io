import bannerLayers from './layers.js'
import movement from './movement.js'
import change from './change.js'
import touch from './touch.js'
import {allLayers, allLayersMobile} from './config.js'
const create = {
	allL: allLayers,
	init: function () {
		document.querySelector('.tright').addEventListener('click', change.changeBanner)
		document.querySelector('.tleft').addEventListener('click', change.changeBanner)

		if (window.screen.width < 800) {
			create.allL = allLayersMobile
			document.body.ontouchstart = touch.start
			document.body.ontouchmove = touch.bannerUpdate
			document.body.ontouchend = touch.leave
		}
		const bannerContent = document.querySelector('.banner-content')
		bannerContent.style.width = '200%'
		var banner = create.one(0, false)
		bannerContent.append(banner)
		document.body.className = `banner0`
		if (window.screen.width < 800) {
			touch.setAround()
		} else
			movement.init()
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
		banner.style.width = (isPrevius) ? '0%' : '50%'
		banner.style.zIndex = 1
		banner.style.position = 'relative'
		banner.dataset.pos = pos
		banner.style.marginTop = '1px'
		banner.style.marginRight = '1px'
		banner.style.marginLeft = '1px'
		banner.style.marginBottom = '1px'
		return banner
	}
}
export default create
