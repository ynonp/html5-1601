var canvas = document.querySelector('canvas');

ctx = canvas.getContext('2d');


canvas.addEventListener('click', function(e) {
  var t = e.clientX;
  var l = e.clientY;

  ctx.beginPath();
  ctx.arc(t, l, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#8ED6FF';
  ctx.fill();
});
