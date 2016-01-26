var btn = document.querySelector('#btn-search');
var inp = document.querySelector('#i-name');
var wait = document.querySelector('.please-wait');
var form = document.querySelector('form');

var target = document.getElementById('spinner');
var spinner = new Spinner().spin(target);

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

  document.querySelector('.movie-name').innerHTML = movieData.Title;
  document.querySelector('.movie-year').innerHTML = movieData.Year;
  document.querySelector('.movie-poster').src = movieData.Poster;
}



function handleLoad(ev) {
  var res = ev.target.responseText;
  var data = JSON.parse(res);

  var movie = data.Search[0];
  showMovie(movie);

}


function handleSearchClick(ev) {
  search(inp.value);
}

form.addEventListener('submit', handleSubmit);










