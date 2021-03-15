var colorScreen = {
	link: '',

	setNightScreen: function () {
		colorScreen.link = document.createElement("link");
		colorScreen.link.href = "static/css/night.css"
		colorScreen.link.type = "text/css";
		colorScreen.link.rel = "stylesheet";
		colorScreen.link.media = "screen,print";

		document.getElementsByTagName("head")[0].appendChild(colorScreen.link);
		document.querySelector(".icon-day").hidden = true
		document.querySelector(".icon-night").hidden = false
	},

	setDayScreen: function () {
		colorScreen.link.remove()
		document.querySelector(".icon-day").hidden = false
		document.querySelector(".icon-night").hidden = true
	},

	setup: function () {
		document.querySelector('.icon-day').addEventListener('click', this.setNightScreen)
		document.querySelector('.icon-night').addEventListener('click', this.setDayScreen)
	}
}

export default colorScreen
