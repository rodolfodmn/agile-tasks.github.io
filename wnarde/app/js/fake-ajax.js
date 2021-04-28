import content from './content.js'

const fakeJson = {
	init: function () {
		if (document.querySelector('#banner2')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/timezone.html')
		}
		if (document.querySelector('#banner5')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/gatlin.html')
		}
		if (document.querySelector('#banner1')) {
			var post = document.querySelector('#post')
			post.setAttribute('includeHtml', 'post/psico.html')
		}
		document.querySelector('#logo').
			addEventListener('click', function (event) {
				var post = document.querySelector('#post')
				post.setAttribute('includeHtml', 'post/wnarde.html')
				content.showFullPageContent('wnarde')
			})
	}
}
export default fakeJson
