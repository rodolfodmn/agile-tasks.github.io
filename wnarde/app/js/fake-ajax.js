import content from './content.js'

const fakeJson = {
	init: function () {
		var post = document.querySelector('#post')
		if (document.querySelector('#banner2')) {
			post.setAttribute('includeHtml', 'post/timezone.html')
			document.querySelector('#banner-text2').onclick = function () {
				content.showContent()
			}
		}
		if (document.querySelector('#banner5')) {
			post.setAttribute('includeHtml', 'post/gatlin.html')
			document.querySelector('#banner-text5').onclick = function () {
				content.showContent()
			}
		}
		if (document.querySelector('#banner1')) {
			post.setAttribute('includeHtml', 'post/psico.html')
			document.querySelector('#banner-text1').onclick = function () {
				content.showContent()
			}
		}
		document.querySelector('#logo').
			addEventListener('click', function (event) {
				post.setAttribute('includeHtml', 'post/wnarde.html')
				content.showFullPageContent('wnarde')
			})
	}
}
export default fakeJson
