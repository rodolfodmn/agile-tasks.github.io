import utils from '../utils.js'
import bannerLayers from './layers.js'
const movement = {
	c: '',
	s: '',
	limit: 20,
	porcent: 0,
	canMove: true,
	init: function () {
		this.c = document.querySelector('.banner-central').querySelector('img')
		this.s = document.querySelectorAll('.banner-secondary')
		this.canMove = true
	},
	move: function (inC, inS, isVertival) {
		if (isVertival) {
			if (true) {
				movement.doMovimentV(inC, inS)
			}
			if (true) {
				movement.doMovimentV(inC, inS)
			}
		} else {
			if (true) {
				movement.doMovimentH(inC, inS)
			}
			if (true) {
				movement.doMovimentH(inC, inS)
			}
		}
	},
	toRight: function () {
		this.move(-1, -1, false)
	},
	toLeft: function () {
		this.move(1, 1, false)
	},
	toUp: function () {
		this.move(-1, -1, true, false)
	},
	toDown: function () {
		this.move(1, 1, true, true)
	},
	doMovimentH: function (inC, inS) {
		if (this.canMove) {
			movement.c.style.left = `${utils.pxToIn(movement.c.style.left) - inC}px`
			if (typeof movement.s[0] !== 'undefined')
				movement.s[0].querySelector('img').style.left = `${utils.pxToIn(movement.s[0].querySelector('img').style.left) - inS}px`

			if (typeof movement.s[1] !== 'undefined')
				movement.s[1].querySelector('img').style.left = `${utils.pxToIn(movement.s[1].querySelector('img').style.left) + inS}px`
		}
	},
	doMovimentV: function (inC, inS) {
		if (this.canMove) {
			movement.c.style.top = `${utils.pxToIn(movement.c.style.top) - inC}px`
			if (typeof movement.s[0] !== 'undefined')
				movement.s[0].querySelector('img').style.top = `${utils.pxToIn(movement.s[0].querySelector('img').style.top) - inS}px`

			if (typeof movement.s[1] !== 'undefined')
				movement.s[1].querySelector('img').style.top = `${utils.pxToIn(movement.s[1].querySelector('img').style.top) + inS}px`
		}
	},
	stop: function () {
		bannerLayers.cleanMovement()
		this.canMove = false
	},
}
export default movement
