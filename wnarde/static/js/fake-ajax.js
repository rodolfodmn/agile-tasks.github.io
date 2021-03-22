const fakeJson = {
	init: function () {
		document.querySelector('#banner0, #img-ban-0').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/home.html')
		})
		document.querySelector('#banner2').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/brain.html')
		})
		document.querySelector('#banner3').addEventListener('click', function (e) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/rosca.html')
		})
	}
}
export default fakeJson
