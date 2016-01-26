var socket = io.connect('https://socket-magic.herokuapp.com/');
var input = document.querySelector('#text');
var form = document.querySelector('#msg');
var messages = document.querySelector('#messages');

function handleData(data) {
  if (data.id === 'chat-room') {
    messages.innerHTML += '<li>' + data.text + '</li>';
  }
}

function handleSubmit(e) {
  e.preventDefault();

  socket.emit('data', { text: input.value, id: 'chat-room' });
  input.value = '';
}

form.addEventListener('submit', handleSubmit);
socket.on('data', handleData);
