var game = document.querySelector('.game');

// var previousWinner;

function handleClickOnGame(ev) {
  var theSquareUserClickedOn = ev.target;
  if (theSquareUserClickedOn.classList.contains('square')) {
    theSquareUserClickedOn.classList.toggle('winner');
  }
}

game.addEventListener('click', handleClickOnGame);


function paintTheTopLeftSquareYellow(index) {
  var squares = game.querySelectorAll('.square');
  squares[index].classList.toggle('winner');
}

function paintSomethingYellow(index) {
  var squares = game.querySelectorAll('.square');
  return function() {
    squares[index].classList.toggle('winner');
  };
}



var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');


for ( var i=0; i < 8; i++ ) {
  var row = document.createElement('div');
  row.classList.add('row');
  
  for ( var j=0; j < 8; j++ ) {
    row.innerHTML += '<div class="square"></div>';
  }

  game.appendChild(row);
}

b1.addEventListener('click', paintSomethingYellow(0));
b2.addEventListener('click', paintSomethingYellow(1));

