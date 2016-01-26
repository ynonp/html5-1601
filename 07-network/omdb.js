var btn = document.querySelector('#btn-search');
var inp = document.querySelector('#i-name');

function search(movieName) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://omdbapi.com/?s=' + movieName);
  xhr.addEventListener('load', handleLoad);
  xhr.send();
}

function showMovie(movieData) {
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

btn.addEventListener('click', handleSearchClick);
