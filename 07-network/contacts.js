
var btn = document.querySelector('#btn-refresh');

function showData(ev) {
  var xhr = ev.target;
  var data = JSON.parse(xhr.responseText);
  var ul = document.querySelector('ul');

  for (var person of data) {
    ul.innerHTML += '<li>' + person.name + '</li>';
  }
}

function refreshData() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "/contacts");
  xhr.addEventListener('load', showData);

  xhr.send();
}




btn.addEventListener('click', refreshData);
