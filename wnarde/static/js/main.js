import banners from './banners.js'
import colorScreen from './colorScreen.js'
import navBar from './nav.js'
import textBanner from './textBanner.js'

window.onload = function () {
	navBar.init()
	textBanner.init()
	colorScreen.setup()
	banners.setupBanners()
} 
