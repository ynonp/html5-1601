var game = document.querySelector('.game');
var currentPlayer = 'X';
var gameOver = false;
var socket = io.connect('https://socket-magic.herokuapp.com/');

function handleClick(ev) {  
  var index = ev.target.dataset.index;  
  socket.emit('data', { index: Number(index) });
}


function handleMoveFromServer(data) {
  if ( typeof data.index === 'undefined' ) {
    return;
  }


  var sqr = document.querySelectorAll('.square')[data.index];

  if (gameOver) { return; }

  if (isBlank(sqr)) {
    sqr.textContent = currentPlayer;
    var result = hasWinner(currentPlayer);
    if (result) {
      alert('Wow You Win: ' + result.player);
      var squares = document.querySelectorAll('.square');      
      for( var index of result.indexes ) {
        squares[index].classList.add('winner');
      }
      gameOver = true;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function isBlank(el) {
  return el.textContent === " ";
}

function hasWinner(player) {
  var board = game.textContent.split("");
  if ( (board[0] === player) && (board[1] === player) && (board[2] === player) ) {
    return { player: player, indexes: [0, 1, 2] };
  }
  if ( (board[3] === player) && (board[4] === player) && (board[5] === player) ) {
    return { player: player, indexes: [3, 4, 5] };
  }
  if ( (board[6] === player) && (board[7] === player) && (board[8] === player) ) {
    return { player: player, indexes: [6, 7, 8] };
  }
  if ( (board[0] === player) && (board[3] === player) && (board[6] === player) ) {
    return { player: player, indexes: [0, 3, 6] };
  }
  if ( (board[1] === player) && (board[4] === player) && (board[7] === player) ) {
    return { player: player, indexes: [1, 4, 7] };
  }
  if ( (board[2] === player) && (board[5] === player) && (board[8] === player) ) {
    return { player: player, indexes: [2, 5, 8] };
  }
  if ( (board[0] === player) && (board[4] === player) && (board[8] === player) ) {
    return { player: player, indexes: [0, 4, 8] };
  }
  if ( (board[2] === player) && (board[4] === player) && (board[6] === player) ) {
    return { player: player, indexes: [2, 4, 6] };
  }
  return null;
}

for (var i=0; i < 3; i++ ) {
  var row = document.createElement('div');
  row.classList.add('row');
  
  for ( var j=0; j<3; j++ ) {
    var index = i * 3 + j;
    row.innerHTML += '<div class="square" data-index="' + index + '"> </div>';
  }

  game.appendChild(row);
}

socket.on('data', handleMoveFromServer);
game.addEventListener('click', handleClick);
