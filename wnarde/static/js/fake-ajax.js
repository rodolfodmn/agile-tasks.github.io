const fakeJson = {
	init: function () {
		document.querySelector('#banner0').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/timezone.html')
		})
		document.querySelector('#banner2').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/psico.html')
		})
		document.querySelector('#banner3').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/gatlin.html')
		})
	}
}
export default fakeJson
