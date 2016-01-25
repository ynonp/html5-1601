var p = document.querySelector('p');
var btn = document.querySelector('button');
var txt = document.querySelector('input');

function signup() {
  var name = txt.value;
  if (name.length > 0) {
    p.innerHTML = 'Welcome ' + name + '<img src="http://cdn.powerball4life.co/2015/11/14/cool-cat-wallpaper-73-cute-cat-wallpapers.jpg" width="200" />';
    txt.value = "";
  }
}

btn.addEventListener('click', signup);
