var btn = document.querySelector('#btn-search');
var inp = document.querySelector('#i-name');
var wait = document.querySelector('.please-wait');
var form = document.querySelector('form');

var target = document.getElementById('spinner');
var spinner = new Spinner().spin(target);
var result = document.querySelector('.result');


var template_text = document.querySelector('.movie-result').innerHTML;

var template = Handlebars.compile(template_text);



function handleSubmit(ev) {
  search(inp.value);
  ev.preventDefault();
}


function search(movieName) {
  wait.classList.add('show');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://omdbapi.com/?s=' + movieName);
  xhr.addEventListener('load', handleLoad);
  xhr.send();
}

function showMovie(movieData) {
  wait.classList.remove('show');

  result.innerHTML = template(movieData);
}



function handleLoad(ev) {
  var res = ev.target.responseText;
  var data = JSON.parse(res);

  var movie = data;
  showMovie(movie);

}


function handleSearchClick(ev) {
  search(inp.value);
}

form.addEventListener('submit', handleSubmit);










