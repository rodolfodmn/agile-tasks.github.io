import banners from './banner/banners.js'
import colorScreen from './colorScreen.js'
import navBar from './nav.js'
import fakeJson from './fake-ajax.js'

window.onload = function () {
	navBar.init()
	colorScreen.setup()
	banners.init()
	fakeJson.init()
} 
