var btn = document.querySelector('#save');
var ta = document.querySelector('#ta');
var loadButton = document.querySelector('#load');

function save() {
  localStorage.setItem('myText', ta.value);
}

function load() {
  var text = localStorage.getItem('myText');
  if (text != null) {
    ta.value = text;
  }
}


btn.addEventListener('click', save);
loadButton.addEventListener('click', load);

load();

