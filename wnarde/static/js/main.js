import banners from './banner/banners.js'
import bannerLayers from './banner/layers.js'
import colorScreen from './colorScreen.js'
import navBar from './nav.js'
import fakeJson from './fake-ajax.js'

window.onload = function () {
	navBar.init()
	banners.init()
	colorScreen.setup()
	fakeJson.init()
	//bannerLayers.init()
} 
