var socket = io.connect('https://socket-magic.herokuapp.com/');
var input = document.querySelector('input');

socket.on('data', function(data) {
  input.value = data.val;
});

input.addEventListener('input', function(e) {
  socket.emit('data', { val: e.target.value });
});
