const utils = {
	screen: window.screen,
	down: window.screen.height / 2,
	middle: window.screen.width / 2,
	pxToIn: function (val) {
		return parseInt((val).replace('px', ''))
	},
	prToIn: function (val) {
		return parseInt((val).replace('%', ''))
	}
}
export default utils
