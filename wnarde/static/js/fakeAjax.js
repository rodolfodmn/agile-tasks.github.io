var fakeAjax = {
	init: function () {
		document.querySelector('#banner0').addEventListener('click', function (ev) {
			console.log(post)
		})
		document.querySelector('#banner2').addEventListener('click', function (ev) {
			console.log(ev)
		})
		document.querySelector('#banner3').addEventListener('click', function (ev) {
			console.log(ev)
		})
	},
}
export default fakeAjax
