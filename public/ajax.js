// TODO: use fetch instead of XMLHttpRequest (promise based!)
const Ajax = {
	gid: id => { return document.getElementById(id) },

	init: function() {
		this.getUsername();
	},

	getUsername: function() {
		Ajax.gid('submit').addEventListener('click', () => {
			let username = Ajax.gid('username').value;

			let xhr = new XMLHttpRequest();

			xhr.open('GET', '/get/?username=' + username, true)
			xhr.onload = function() {
				if (this.status == 200) {
					Ajax.gid('output').innerHTML = this.responseText;
				}
			}

			xhr.send();
		})
	}
}

Ajax.init();
