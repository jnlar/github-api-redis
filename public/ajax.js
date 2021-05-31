const Ajax = {
	gid: id => { return document.getElementById(id) },

	init: function() {
		this.getUserInfo();
	},

	getUserInfo: function() {
		this.gid('submit').addEventListener('click', () => {
			let username = this.gid('username').value;

			fetch('/get/?username=' + username)
			.then(async res => {
				const data = await res.text();
				this.gid('output').innerHTML = data;
			})
			.catch(err => console.log(err));
		});
	}
}

Ajax.init();
