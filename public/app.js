const socket = io.connect('http://localhost:3000');
const gid = id => { return document.getElementById(id) };

const input = gid('get-user');
const output = gid('output');
const button = gid('send');

button.addEventListener('click', () => {
	if (input.value.length > 0) {
		socket.emit('get-user', {
			username: input.value
		})
	}
	input.value = "";
})

socket.on('get-user', data => {
	output.innerHTML = `${data}`;
})
