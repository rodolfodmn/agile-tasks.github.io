const fakeJson = {
	init: function () {
		if (document.querySelector('#banner0')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/timezone.html')
		}
		if (document.querySelector('#banner1')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/gatlin.html')
		}
		if (document.querySelector('#banner2')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/psico.html')
		}
	}
}
export default fakeJson
