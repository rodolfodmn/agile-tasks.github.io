import utils from '../utils.js'
import bannerLayers from './layers.js'
const movement = {
	c: '',
	s: '',
	limit: 20,
	porcent: 0,
	canMove: true,
	init: function () {
		this.c = document.querySelector('.banner-central').style
		this.s = document.querySelectorAll('.banner-secondary')
		this.canMove = true
	},
	move: function (inC, inS, isVertival, revert) {
		return
		if (revert) {
			inBan *= -1
			inC *= -1
			inT *= -1
			inS *= -1
		}
		if (isVertival) {
			if (revert) {
				if (true) {
					movement.doMovimentV(inC, inS)
				}
			} else {
				if (true) {
					movement.doMovimentV(inC, inS)
				}
			}
		} else {
			if (revert) {
				if (true) {
					movement.doMovimentH(inC, inS)
				}
			} else {
				if (true) {
					movement.doMovimentH(inC, inS)
				}
			}
		}
	},
	toDown: function () {
		this.move(2, 1, true, false)
	},
	toRight: function () {
		this.move(2, 1, false, true)
	},
	toUp: function () {
		this.move(2, 1, true, true)
	},
	toLeft: function () {
		this.move(2, 1, false, false)
	},
	doMovimentH: function (inC, inS) {
		if (this.canMove) {
			movement.c.left = `${utils.pxToIn(movement.c.left) - inC}px`
			if (typeof movement.s[0] != undefined)
				movement.s[0].style.left = `${utils.pxToIn(movement.s[0].style.left) - inS}px`

			if (typeof movement.s[1] != undefined)
				movement.s[1].style.left = `${utils.pxToIn(movement.s[1].style.left) + inS}px`
		}
	},
	doMovimentV: function (inC, inS) {
		if (this.canMove) {
			movement.c.top = `${utils.pxToIn(movement.c.top) - inC}px`
			if (typeof movement.s[0] != undefined)
				movement.s[0].style.top = `${utils.pxToIn(movement.s[0].style.top) - inS}px`

			if (typeof movement.s[1] != undefined)
				movement.s[1].style.top = `${utils.pxToIn(movement.s[1].style.top) + inS}px`
		}
	},
	stop: function () {
		bannerLayers.cleanMovement()
		this.canMove = false
	},
}
export default movement
