import utils from '../utils.js'
import bannerLayers from './layers.js'
const movement = {
	c: '',
	t: '',
	s: '',
	ban: '',
	limit: 20,
	porcent: 0,
	canMove: true,
	init: function () {
		this.c = document.querySelector('.banner-central').style
		this.t = document.querySelector('.banner-text').style
		this.s = document.querySelectorAll('.banner-secondary')
		this.ban = document.querySelector('.banner-base')
		this.canMove = true
	},
	move: function (inBan, inC, inT, inS, isVertival, revert) {
		if (revert) {
			inBan *= -1
			inC *= -1
			inT *= -1
			inS *= -1
		}
		if (isVertival) {
			if (revert) {
				if (utils.pxToIn(movement.ban.style.marginTop) > 0) {
					movement.doMovimentV(inBan, inC, inT, inS)
				}
			} else {
				if (utils.pxToIn(movement.ban.style.marginTop) < movement.limit) {
					movement.doMovimentV(inBan, inC, inT, inS)
				}
			}
		} else {
			if (revert) {
				if (utils.pxToIn(movement.ban.style.marginLeft) > 0) {
					movement.doMovimentH(inBan, inC, inT, inS)
				}
			} else {
				if (utils.pxToIn(movement.ban.style.marginLeft) < movement.limit) {
					movement.doMovimentH(inBan, inC, inT, inS)
				}
			}
		}
	},
	toDown: function () {
		this.move(2, 1, 2, 1, true, false)
	},
	toRight: function () {
		this.move(2, 1, 2, 1, false, true)
	},
	toUp: function () {
		this.move(2, 1, 2, 1, true, true)
	},
	toLeft: function () {
		this.move(2, 1, 2, 1, false, false)
	},
	doMovimentH: function (inBan, inC, inT, inS) {
		if (this.canMove) {
			movement.ban.style.marginLeft = `${utils.pxToIn(movement.ban.style.marginLeft) + inBan}px`
			movement.c.left = `${utils.pxToIn(movement.c.left) - inC}px`
			movement.t.left = `${utils.pxToIn(movement.t.left) - inT}px`
			if (typeof movement.s[0] != undefined)
				movement.s[0].style.left = `${utils.pxToIn(movement.s[0].style.left) - inS}px`

			if (typeof movement.s[1] != undefined)
				movement.s[1].style.left = `${utils.pxToIn(movement.s[1].style.left) + inS}px`
		}
	},
	doMovimentV: function (inBan, inC, inT, inS) {
		if (this.canMove) {
			movement.ban.style.marginTop = `${utils.pxToIn(movement.ban.style.marginTop) + inBan}px`
			movement.c.top = `${utils.pxToIn(movement.c.top) - inC}px`
			movement.t.top = `${utils.pxToIn(movement.t.top) - inT}px`
			if (typeof movement.s[0] != undefined)
				movement.s[0].style.top = `${utils.pxToIn(movement.s[0].style.top) - inS}px`

			if (typeof movement.s[1] != undefined)
				movement.s[1].style.top = `${utils.pxToIn(movement.s[1].style.top) + inS}px`
		}
	},
	stop: function () {
		bannerLayers.cleanMovement()
		this.ban.style.marginTop = 0
		this.ban.style.marginLeft = 0
		this.canMove = false
	},
}
export default movement
