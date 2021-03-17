import banners from './banners.js'
import colorScreen from './colorScreen.js'
import navBar from './nav.js'

window.onload = function () {
	navBar.init()
	colorScreen.setup()
	banners.setupBanners()
} 
