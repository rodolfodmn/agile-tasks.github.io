import banners from './banners.js'
import colorScreen from './colorScreen.js'
import navBar from './nav.js'
import fakeAjax from './fakeAjax.js'

window.onload = function () {
	navBar.init()
	colorScreen.setup()
	banners.setupBanners()
	fakeAjax.init()
} 
